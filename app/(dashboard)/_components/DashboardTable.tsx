"use client";
import LeftArrowPaginationIcon from "@/public/icons/LeftArrowPaginationIcon";
import RightArrowPaginationIcon from "@/public/icons/RightArrowPaginationIcon";
 
import React, { useState } from "react";

// Define the types for the project data
interface Project {
  name: string;
  assigneeCount: number;
  issueType?: React.ReactNode; // Optional field for issue type
  progress: number;
  dueDate: string;
  status: string;
}

interface ProjectTableProps {
  projects: Project[];
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3); // Default to 3 rows per page

  const indexOfLastProject = currentPage * rowsPerPage;
  const indexOfFirstProject = indexOfLastProject - rowsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page change
  };

  return (
    <div>
      <div className="w-full min-w-0 overflow-x-auto">
        <table className="min-w-[1000px] w-full table-auto text-white">
        <thead>
          <tr className="text-sm border-b border-[#1F1F1F] py-10">
            <th className="py-5 px-6 text-left text-sm">Projects</th>
            <th className="py-5 px-6 text-left text-sm">Assignee</th>
            <th className="py-5 px-6 text-left text-sm">Issue Type</th>
            <th className="py-5 px-6 text-left text-sm">Progress</th>
            <th className="py-5 px-6 text-left text-sm">Due Date</th>
            <th className="py-5 px-6 text-left text-sm">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project, index) => (
            <tr key={index} className="mt-[50px]">
              <td className="text-base font-medium py-5 px-6">
                {project.name}
              </td>
              <td className="text-base font-medium py-5 px-6">{`+${project.assigneeCount}`}</td>
              <td className="text-base font-medium py-5 px-6">
                {project.issueType}
              </td>
              <td className="text-base font-medium py-5 px-6 flex items-center gap-2">
                <div className="w-full bg-white h-2 rounded-full">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${project.progress}%`,
                      backgroundColor:
                        project.status === "Complete"
                          ? "#30c47a"
                          : project.status === "On Going"
                          ? "#ffba69"
                          : "#ff708b",
                    }}
                  ></div>
                </div>
                <span
                  className={`${
                    project.status === "Complete"
                      ? "text-[#2fa86b]"
                      : project.status === "On Going"
                      ? "text-[#f1b064]"
                      : "text-[#ff708b]"
                  }`}
                >
                  {project.progress}%
                </span>
              </td>
              <td className="px-4 py-2">{project.dueDate}</td>
              <td className="py-5 px-6">
                <span
                  className={`rounded-full py-1 px-3 ${
                    project.status === "Complete"
                      ? "complete"
                      : project.status === "On Going"
                      ? "on_going"
                      : "unfinished"
                  }`}
                >
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mt-4 py-3 px-4 sm:px-6 border-t border-[#1F1F1F]">
        <div className="flex items-center">
          <label className="mr-2 text-sm">Show rows per page</label>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className=" bg-[#242427]  text-white p-2 text-sm rounded-md"
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>

        <div className=" flex items-center gap-4 min-w-0">
          <div className="text-sm whitespace-nowrap">
            <span>
              {indexOfFirstProject + 1}-{indexOfLastProject} of{" "}
              {projects.length}
            </span>
          </div>

          <div className="flex items-center">
            <button
              className="p-2 text-white  rounded-md shrink-0"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <LeftArrowPaginationIcon/>
            </button>

            <button
              className="p-2 text-white   rounded-md shrink-0"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <RightArrowPaginationIcon/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
