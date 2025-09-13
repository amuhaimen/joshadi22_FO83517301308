import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ss1 from "@/public/ss-1.png";
import ss2 from "@/public/ss-2.png";
import ss3 from "@/public/sshot.png";
import teamImg from "@/public/Team.png";

const ProjectScreenshotCard = () => {
  const screenshotsData = [
    { url: ss1, title: "User Flow Phase 1", date: "2025-06-01", teamImage: teamImg },
    { url: ss2, title: "User Flow Phase 2", date: "2025-06-05", teamImage: teamImg },
    { url: ss3, title: "User Flow Phase 3", date: "2025-06-10", teamImage: teamImg },
    { url: ss1, title: "Design Phase 1", date: "2025-06-15", teamImage: teamImg },
    { url: ss2, title: "Design Phase 2", date: "2025-06-20", teamImage: teamImg },
    { url: ss2, title: "Design Phase 2", date: "2025-06-20", teamImage: teamImg },
    { url: ss2, title: "Design Phase 2", date: "2025-06-20", teamImage: teamImg },
    { url: ss2, title: "Design Phase 2", date: "2025-06-20", teamImage: teamImg },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(1);

  const perRow = 4; // desktop design assumption
  const indexOfLastProject = currentPage * rowsPerPage * perRow;
  const indexOfFirstProject = indexOfLastProject - rowsPerPage * perRow;
  const currentProjects = screenshotsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(screenshotsData.length / (rowsPerPage * perRow));

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      {/* Grid: keep 4 cols on md+ (desktop unchanged), add 2 cols on small screens */}
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 md:px-5 md:px-6 py-4 md:py-6 ">

        {currentProjects.map((screenshot, index) => (
          <Link
            key={index}
            href="/"
            className="bg-[#242427] text-center p-3 sm:p-4 rounded-[16px] w-full md:max-w-[380px] mx-auto"
          >
            <Image
              src={screenshot.url}
              alt={screenshot.title}
              className="w-full h-auto rounded-[10px]"
              priority={index < 2}
            />
            <h2 className="text-sm sm:text-base font-semibold text-white my-3 sm:my-4 ">
              {screenshot.title}
            </h2>

            <div className="flex justify-between items-center">
              <div >
                <Image src={screenshot.teamImage} alt="team"   />
              </div>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.75 2.25C6.75 1.83579 6.41421 1.5 6 1.5C5.58579 1.5 5.25 1.83579 5.25 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V14.25C2.25 15.4926 3.25736 16.5 4.5 16.5H13.5C14.7426 16.5 15.75 15.4926 15.75 14.25V4.5C15.75 3.25736 14.7426 2.25 13.5 2.25H12.75C12.75 1.83579 12.4142 1.5 12 1.5C11.5858 1.5 11.25 1.83579 11.25 2.25H6.75ZM14.25 5.25V4.5C14.25 4.08579 13.9142 3.75 13.5 3.75H12.75C12.75 4.16421 12.4142 4.5 12 4.5C11.5858 4.5 11.25 4.16421 11.25 3.75H6.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V5.25H14.25ZM3.75 6.75V14.25C3.75 14.6642 4.08579 15 4.5 15H13.5C13.9142 15 14.25 14.6642 14.25 14.25V6.75H3.75Z"
                    fill="#858D9D"
                  />
                </svg>
                <p className="text-[#858D9D] text-xs sm:text-xs">{screenshot.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination: desktop unchanged; stack & scale on small screens */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 sm:gap-3 py-2 sm:py-3 px-4 md:px-6 border-t border-[#1F1F1F]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[18px]">
          <label className="text-xs sm:text-sm text-white">Show rows per page</label>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="bg-[#242427] text-white p-2 text-sm rounded-md w-full sm:w-auto min-w-[88px]"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div className="text-white text-sm sm:text-base">
            <span>
              {(currentPage - 1) * rowsPerPage * perRow + 1}-
              {Math.min(currentPage * rowsPerPage * perRow, screenshotsData.length)} of{" "}
              {screenshotsData.length}
            </span>
          </div>

          <div className="flex items-center justify-end sm:justify-start">
            <button
              className="p-2 text-white rounded-md disabled:opacity-40"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.5 17.5L9.5 12.5L14.5 7.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="p-2 text-white rounded-md disabled:opacity-40"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M9.5 7.5L14.5 12.5L9.5 17.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreenshotCard;
