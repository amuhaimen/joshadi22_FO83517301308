import React from 'react';

type StepProgressBarProps = {
  steps: string[]; // Step names (e.g., ["Concept", "Research", "Design", "Confirm", "Launch"])
  activeStep: number; // Index of the active step
};

const StepProgressBar: React.FC<StepProgressBarProps> = ({ steps, activeStep }) => {
  return (
    <div className="flex justify-between items-center space-x-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          {/* Circle representing the step */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
              index < activeStep
                ? 'bg-green-500 border-green-500 text-white'
                : index === activeStep
                ? 'bg-white border-green-500 text-green-500'
                : 'bg-gray-600 border-gray-600 text-white'
            }`}
          >
            {/* Step Number */}
            {index < activeStep ? (
              <span className="text-white text-sm">{index + 1}</span>
            ) : (
              <span className="text-sm">{index + 1}</span>
            )}
          </div>

          {/* Step Label */}
          <span
            className={`ml-2 text-sm ${
              index < activeStep
                ? 'text-green-500'
                : index === activeStep
                ? 'text-green-500'
                : 'text-gray-500'
            }`}
          >
            {step}
          </span>

          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <div
              className={`w-8 h-0.5 ${
                index < activeStep ? 'bg-green-500' : 'bg-gray-600'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepProgressBar;
