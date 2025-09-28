"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

type Role = "investor" | "manager" | "designer" | "developer";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const roleQuestions: Record<Role, Question[]> = {
  investor: [
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
  manager: [
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
  designer: [
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
  developer: [
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

const RoleQuestions: React.FC = () => {
  const { role } = useAuth();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const router = useRouter();

  // Redirect if no role is found
  useEffect(() => {
    if (!role) {
      router.push("/login");
    }
  }, [role, router]);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const currentRole = role as Role;
  const questions = currentRole ? roleQuestions[currentRole] : [];

  const isAllAnswered =
    currentRole &&
    questions &&
    Object.keys(answers).length === questions.length;

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (isAllAnswered) {
      // Save answers and redirect to dashboard
      localStorage.setItem("roleAnswers", JSON.stringify(answers));

      // Redirect based on role
      if (currentRole === "manager") {
        router.push("/dashboard");
      } else if (currentRole === "developer") {
        router.push("/dashboard/developer");
      } else if (currentRole === "designer") {
        router.push("/dashboard/designer");
      } else if (currentRole === "investor") {
        router.push("/dashboard/investor");
      }
    }
  };

  // Show loading if no role
  if (!role) {
    return (
      <div className="main_bg min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Show message if role questions not found
  if (!questions || questions.length === 0) {
    return (
      <div className="main_bg min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Role questions not found</div>
      </div>
    );
  }

  const getRoleDisplayName = (role: string) => {
    const roleNames: Record<string, string> = {
      manager: "Project Manager",
      developer: "Developer",
      designer: "UX Designer",
      investor: "Investor",
    };
    return roleNames[role] || role;
  };

  return (
    <div className="main_bg min-h-screen flex items-center justify-center">
      <div className="p-6 w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 text-center">
          Questions for {getRoleDisplayName(currentRole)}
        </h2>

        <div className="role_question_bg px-4 sm:px-[38px] py-6 sm:py-[48px] rounded-3xl">
          {questions.map((question) => (
            <div key={question.id} className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {question.question}
              </h3>
              <select
                onChange={(e) =>
                  handleAnswerChange(question.id, e.target.value)
                }
                value={answers[question.id] || ""}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBack}
            className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors  
                bg-[#05A265]  cursor-pointer hover:bg-[#048A56]
            `}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={!isAllAnswered}
            className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
              !isAllAnswered
                ? "bg-gray-500 cursor-not-allowed opacity-50"
                : "bg-[#05A265] hover:bg-[#048A56] focus:outline-none focus:ring-2 focus:ring-[#05A265] cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleQuestions;
