'use client';
import React, { useState } from 'react';

type Role = 'Investor' | 'Project Manager' | 'UX Designer' | 'Developer';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const roleQuestions: Record<Role, Question[]> = {
  'Investor': [
    { id: 1, question: 'What is your typical investment range per project?', options: ['Risk-tolerant', 'Conservative', 'Diversified'] },
    { id: 2, question: 'What startup stage do you prefer investing in?', options: ['Pre-seed', 'Seed', 'Series A', 'Later Stage'] },
    { id: 3, question: 'Which industries are you most interested in funding?', options: ['Small', 'Medium', 'Large'] },
    { id: 4, question: 'What is your risk tolerance?', options: ['Low', 'Medium', 'High'] },
    { id: 5, question: 'Do you prefer equity-based, revenue-share, or SAFE note models?', options: ['Low', 'Medium', 'High'] },
    { id: 6, question: 'How often do you want performance updates?', options: ['Weekly', 'Monthly', 'Quarterly'] },
    { id: 7, question: 'Do you want to be an active advisor or a silent investor?', options: ['Weekly', 'Monthly', 'Quarterly'] },
  ],
  'Project Manager': [
    { id: 1, question: 'What is the size of the team you usually manage?', options: ['Agile', 'Waterfall', 'Scrum'] },
    { id: 2, question: 'Which project methodology do you use?', options: ['Agile', 'Scrum', 'Kanban','Waterfall'] },
    { id: 3, question: "What's your average project budget range?", options: ['1000$', '20000$','30000$'] },
    { id: 4, question: "Do you require compliance modules? ", options: ['Yes', 'No'] },
    { id: 5, question: "How often do you generate reports for stakeholders?", options: ['Yes', 'No'] },
    { id: 6, question: "Do you prefer Gantt charts or Kanban boards for tracking?", options: ['Yes', 'No'] },
    { id: 7, question: "How do you communicate with your team?", options: ['Slack', 'Teams','Email','Other'] },
  ],
  'UX Designer': [
    { id: 1, question: 'What design tools do you use? ', options: ['Figma', 'Sketch', 'Adobe XD', 'InVision','others'] },
    { id: 2, question: 'Which platforms do you design for most?', options: ['Web', 'Ios', 'Android', 'Cross-Platform'] },
    { id: 3, question: 'How do you usually test prototypes?', options: ['User testing', 'A/B testing', 'Heatmaps','Surveys'] },
    { id: 4, question: "What's your collaboration style?", options: ['Work solo', 'pair design', 'team design'] },
    { id: 5, question: "How important is accessibility in your design process?", options: ['Low', 'Medium', 'High'] },
    { id: 6, question: "Do you need version control for design files? ", options: ['Yes', 'No'] },
    { id: 7, question: "Do you want integrated feedback loops with developers/managers?", options: ['Yes', 'No'] }
  ],
  'Developer': [
    { id: 1, question: 'What is your primary programming language?', options: ['Python', 'JavaScript', 'Java','C#'] },
    { id: 2, question: 'Which frameworks do you work with?', options: ['React', 'Angular', 'Angular','Node.js','Django','Spring'] },
    { id: 3, question: 'What CI/CD tools do you prefer?', options: ['GitHub Actions', 'CircleCI', 'Other'] },
    { id: 4, question: 'Do you primarily work on', options: ['Frontend Projects','Backend Projects','Full-stack Projects' ] },
    { id: 5, question: 'How do you track your time?', options: ['Manual logs','automated tracking','code reviews' ] },
    { id: 6, question: 'What do you prefer', options: ['pair programming','solo development','code reviews' ] },
  ],
};

const RoleSelection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setAnswers({});
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSignupChange = (field: string, value: string) => {
    setSignupData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignupSubmit = () => {
    // Handle signup logic here
    console.log('Signup data:', signupData);
    console.log('Role answers:', answers);
  };

  const isFormEnabled = Boolean(selectedRole && Object.keys(answers).length === roleQuestions[selectedRole].length);

  return (
    <div className="sign_up_bg h-screen flex items-center justify-center overflow-y-auto">
      <div className="max-w-full w-full sm:max-w-6xl p-8">
        <div className="max-w-full mx-auto p-8 rounded-xl">
          {/* Sticky Menu */}
          <div className="sticky top-0  p-4 z-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {['Investor', 'Project Manager', 'UX Designer', 'Developer'].map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleSelect(role as Role)}
                  className={`${selectedRole === role ? 'bg-[#05A265] border-transparent' : 'bg-[#3E4E48] border-[#05A265]'} border text-white font-semibold p-8 cursor-pointer rounded-[12px]`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {selectedRole && (
            <div className=' flex flex-col lg:flex-row justify-center items-center gap-5 h-[700px]'> 
            {/* role based questions (left side) */}
            <div className={`auth_card_bg p-12 rounded-[20px] border border-[#424f61] w-1/2 h-full overflow-y-auto ${
              isFormEnabled ? 'opacity-50 pointer-events-none' : ''
            }`}>
              <h2 className="text-3xl font-medium text-white mb-6">Questions for {selectedRole}</h2>
              <div>
                {roleQuestions[selectedRole].map((question) => (
                  <div key={question.id} className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{question.question}</h3>
                    <select
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      value={answers[question.id] || ''}
                      disabled={isFormEnabled}
                      className={`w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#D2D2D5] ${
                        isFormEnabled ? 'cursor-not-allowed opacity-75' : ''
                      }`}
                    >
                      <option value="" className="text-base">
                        Select an Input
                      </option>
                      {question.options.map((option, index) => (
                        <option key={index} value={option} className="text-black py-6 border border-black">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
                {isFormEnabled && (
                  <div className="text-center mt-6">
                    <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      All Questions Completed!
                    </div>
                  </div>
                )}
              </div>
            </div>
           {/* sign up form   (right side)*/}
            <div className={`auth_card_bg p-12 rounded-[20px] border border-[#424f61] w-1/2 h-full flex flex-col ${
              !isFormEnabled ? 'cursor-not-allowed' : ''
            }`}>
              <h2 className="text-3xl font-medium text-white mb-6">Sign Up</h2>
              <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    disabled={!isFormEnabled}
                    value={signupData.fullName}
                    onChange={(e) => handleSignupChange('fullName', e.target.value)}
                    className={`w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                      !isFormEnabled 
                        ? 'bg-gray-200 cursor-not-allowed opacity-50' 
                        : 'bg-white'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    disabled={!isFormEnabled}
                    value={signupData.email}
                    onChange={(e) => handleSignupChange('email', e.target.value)}
                    className={`w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                      !isFormEnabled 
                        ? 'bg-gray-200 cursor-not-allowed opacity-50' 
                        : 'bg-white'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    disabled={!isFormEnabled}
                    value={signupData.password}
                    onChange={(e) => handleSignupChange('password', e.target.value)}
                    className={`w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                      !isFormEnabled 
                        ? 'bg-gray-200 cursor-not-allowed opacity-50' 
                        : 'bg-white'
                    }`}
                    placeholder="Enter your password"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    disabled={!isFormEnabled}
                    value={signupData.confirmPassword}
                    onChange={(e) => handleSignupChange('confirmPassword', e.target.value)}
                    className={`w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                      !isFormEnabled 
                        ? 'bg-gray-200 cursor-not-allowed opacity-50' 
                        : 'bg-white'
                    }`}
                    placeholder="Confirm your password"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    disabled={!isFormEnabled}
                    value={signupData.phone}
                    onChange={(e) => handleSignupChange('phone', e.target.value)}
                    className={`w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                      !isFormEnabled 
                        ? 'bg-gray-200 cursor-not-allowed opacity-50' 
                        : 'bg-white'
                    }`}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="pt-4 mt-auto">
                <button
                  onClick={handleSignupSubmit}
                  disabled={!isFormEnabled}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                    !isFormEnabled
                      ? 'bg-gray-500 cursor-not-allowed opacity-50'
                      : 'bg-[#05A265] hover:bg-[#048A56] focus:outline-none focus:ring-2 focus:ring-[#05A265]'
                  }`}
                >
                  {!isFormEnabled && selectedRole
                    ? `Complete ${roleQuestions[selectedRole].length - Object.keys(answers).length} more questions` 
                    : 'Sign Up'
                  }
                </button>
              </div>
            </div>

            </div>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;