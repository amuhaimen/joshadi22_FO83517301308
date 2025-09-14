"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Role = "Investor" | "Project Manager" | "UX Designer" | "Developer";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const roleQuestions: Record<Role, Question[]> = {
  Investor: [
    {
      id: 1,
      question: "What is your typical investment range per project?",
      options: ["Risk-tolerant", "Conservative", "Diversified"],
    },
    {
      id: 2,
      question: "What startup stage do you prefer investing in?",
      options: ["Pre-seed", "Seed", "Series A", "Later Stage"],
    },
    {
      id: 3,
      question: "Which industries are you most interested in funding?",
      options: ["Small", "Medium", "Large"],
    },
    {
      id: 4,
      question: "What is your risk tolerance?",
      options: ["Low", "Medium", "High"],
    },
    {
      id: 5,
      question:
        "Do you prefer equity-based, revenue-share, or SAFE note models?",
      options: ["Equity-based", "Revenue-share", "SAFE Note"],
    },
    {
      id: 6,
      question: "How often do you want performance updates?",
      options: ["Weekly", "Monthly", "Quarterly"],
    },
    {
      id: 7,
      question: "Do you want to be an active advisor or a silent investor?",
      options: ["Active Advisor", "Silent Investor"],
    },
  ],
  "Project Manager": [
    {
      id: 1,
      question: "What is the size of the team you usually manage?",
      options: ["1-5", "6-15", "15+"],
    },
    {
      id: 2,
      question: "Which project methodology do you use?",
      options: ["Agile", "Scrum", "Kanban", "Waterfall"],
    },
    {
      id: 3,
      question: "What's your average project budget range?",
      options: ["< $10,000", "$10k–$50k", "$50k+"],
    },
    {
      id: 4,
      question: "Do you require compliance modules?",
      options: ["Yes", "No"],
    },
    {
      id: 5,
      question: "How often do you generate reports for stakeholders?",
      options: ["Weekly", "Monthly", "Quarterly"],
    },
    {
      id: 6,
      question: "Do you prefer Gantt charts or Kanban boards for tracking?",
      options: ["Gantt", "Kanban"],
    },
    {
      id: 7,
      question: "How do you communicate with your team?",
      options: ["Slack", "Teams", "Email", "Other"],
    },
  ],
  "UX Designer": [
    {
      id: 1,
      question: "What design tools do you use?",
      options: ["Figma", "Sketch", "Adobe XD", "InVision", "Other"],
    },
    {
      id: 2,
      question: "Which platforms do you design for most?",
      options: ["Web", "iOS", "Android", "Cross-Platform"],
    },
    {
      id: 3,
      question: "How do you usually test prototypes?",
      options: ["User testing", "A/B testing", "Heatmaps", "Surveys"],
    },
    {
      id: 4,
      question: "What's your collaboration style?",
      options: ["Work solo", "Pair design", "Team design"],
    },
    {
      id: 5,
      question: "How important is accessibility in your design process?",
      options: ["Low", "Medium", "High"],
    },
    {
      id: 6,
      question: "Do you need version control for design files?",
      options: ["Yes", "No"],
    },
    {
      id: 7,
      question:
        "Do you want integrated feedback loops with developers/managers?",
      options: ["Yes", "No"],
    },
  ],
  Developer: [
    {
      id: 1,
      question: "What is your primary programming language?",
      options: ["Python", "JavaScript", "Java", "C#"],
    },
    {
      id: 2,
      question: "Which frameworks do you work with?",
      options: ["React", "Angular", "Vue", "Node.js", "Django", "Spring"],
    },
    {
      id: 3,
      question: "What CI/CD tools do you prefer?",
      options: ["GitHub Actions", "CircleCI", "Other"],
    },
    {
      id: 4,
      question: "Do you primarily work on?",
      options: ["Frontend Projects", "Backend Projects", "Full-stack Projects"],
    },
    {
      id: 5,
      question: "How do you track your time?",
      options: ["Manual logs", "Automated tracking", "Code reviews"],
    },
    {
      id: 6,
      question: "What do you prefer?",
      options: ["Pair programming", "Solo development", "Code reviews"],
    },
  ],
};

const RoleSelection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const router = useRouter();

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

  const isAllAnswered =
    selectedRole &&
    Object.keys(answers).length === roleQuestions[selectedRole].length;

  const handleNext = () => {
    if (isAllAnswered) {
      router.push("/sign-up");
    }
  };

  return (
    <div className="main_bg min-h-screen flex items-center justify-center  ">
      <div className="p-6 ">
        {!selectedRole && (
          <h2 className="text-center text-white text-[32px] font-medium sm:whitespace-nowrap mb-6 sm:mb-8">
            Select your role to personalize your experience.
          </h2>
        )}
        <div className="mx-auto rounded-xl">
          {!selectedRole ? (
            // Role Selection Step
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-md mx-auto">
              {(
                [
                  "Investor",
                  "Project Manager",
                  "UX Designer",
                  "Developer",
                ] as Role[]
              ).map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleSelect(role)}
                  className="w-full py-4 px-6 sm:py-9 sm:px-8 role_btn_bg text-white font-semibold rounded-lg shadow-md hover:bg-[#05A265] transition-all duration-200 ease-in-out border border-[#3FD98B] cursor-pointer text-[32px] font-semibold"
                >
                  {role}
                </button>
              ))}
            </div>
          ) : (
            // Questions Step
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 text-center">
                Questions for {selectedRole}
              </h2>

              <div className="role_question_bg px-4 sm:px-[38px] py-6 sm:py-[48px] rounded-3xl  ">
                {roleQuestions[selectedRole].map((question) => (
                  <div key={question.id} className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2  ">
                      {question.question}
                    </h3>
                    <select
                      onChange={(e) =>
                        handleAnswerChange(question.id, e.target.value)
                      }
                      value={answers[question.id] || ""}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-white "
                    >
                      <option value="">Select an option</option>
                      {question.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0">
                <button
                  onClick={() => setSelectedRole(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-white bg-gray-600 hover:bg-gray-700 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isAllAnswered}
                  className={`w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
                    !isAllAnswered
                      ? "bg-gray-500 cursor-not-allowed opacity-50"
                      : "bg-[#05A265] hover:bg-[#048A56] focus:outline-none focus:ring-2 focus:ring-[#05A265]"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
