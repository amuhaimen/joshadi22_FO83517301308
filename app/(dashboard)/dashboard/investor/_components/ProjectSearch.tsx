import React from "react";
import ProjectSearchCard from "./ProjectSearchCard";

const demoData = [
  {
    projectName: "NextGen Platform",
    status: "Active", // 'Active' or 'At risk'
    description:
      "Cloud-based enterprise solution with AI capabilities for predictive analytics and workflow automation...",
    funding: "$8.2M I S12M",
    progress: 28,
    dueDate: "Due: Oct 15, 2025",
  },
  {
    projectName: "APAC Expansion",
    status: "At risk", // 'Active' or 'At risk'
    description:
      "Strategic market entry into Singapore, Japan, and Australia with localized product offerings and",
    funding: "Funding: $8.2M I S12M",
    progress: 55,
    dueDate: "Due: Oct 15, 2025",
  },
  {
    projectName: "Al Integration",
    status: "Active", // 'Active' or 'At risk'
    description:
      "Next-generation Al capabilities including predictive analytics, natural language processing...",
    funding: "$12.5M I S20M",
    progress: 88,
    dueDate: "Due: Oct 15, 2025",
  },
];


export default function ProjectSearch() {
  return (
    <div className=" bg-[#181818] rounded-[24px] mt-4 p-4">
        {/* header part */}
      <div className=" flex justify-between items-center">
        <h2 className=" text-xl font-semibold text-white">Project Search</h2>
        <div className="relative w-full max-w-md">
          {/* <!-- Input field with search icon on the left --> */}
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 py-3 px-4 w-full   bg-[#1f1f1f] border border-[#ffffff0d] rounded-[8px] text-[#A5A5AB]"
          />
          {/* <!-- Search icon inside the input field --> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zM21 21l-4.35-4.35"
            />
          </svg>
        </div>
      </div>
      {/* content part */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {demoData.map((project, index) => (
        <ProjectSearchCard
          key={index}
          projectName={project.projectName}
          status={project.status}
          description={project.description}
          funding={project.funding}
          progress={project.progress}
          dueDate={project.dueDate}
        />
      ))}
    </div>
    </div>
  );
}
