'use client'
import DynamicTable from '@/app/(dashboard)/_components/reusable/DynamicTable';
import LeftArrowPaginationIcon from '@/public/icons/LeftArrowPaginationIcon';
import RightArrowPaginationIcon from '@/public/icons/RightArrowPaginationIcon';
import React, { useState,ReactNode } from 'react'


 

type TimeSheet = {
  id: number;
  role: string;
  jobFolder: string;
  start: string;
  end: string;
  hours: string;
  rateH?: string;
  earnings: string;
};

const data: TimeSheet[] = [
  {
    id: 1,
    role: "UX Designer",
    jobFolder: "Acme Website Redesign",
    start: "9:40 AM",
    end: "1:00 PM",
    hours: "3h 20m",
    rateH: "40",
    earnings: "$132.00",
  },
  {
    id: 2,
    role: "Frontend Developer",
    jobFolder: "E-commerce Platform",
    start: "10:00 AM",
    end: "6:00 PM",
    hours: "8h 00m",
    rateH: "50",
    earnings: "$400.00",
  },
  {
    id: 3,
    role: "Backend Developer",
    jobFolder: "API Integration Project",
    start: "2:00 PM",
    end: "5:30 PM",
    hours: "3h 30m",
    earnings: "$175.00",
  },
  {
    id: 4,
    role: "UI/UX Designer",
    jobFolder: "Mobile App Redesign",
    start: "8:30 AM",
    end: "12:30 PM",
    hours: "4h 00m",
    rateH: "45",
    earnings: "$180.00",
  },
  {
    id: 5,
    role: "Product Manager",
    jobFolder: "Product Launch Strategy",
    start: "9:00 AM",
    end: "5:00 PM",
    hours: "8h 00m",
    earnings: "$480.00",
  },
];

// Define the ColumnConfig type if not already defined or imported
type ColumnConfig<T> = {
  label: string;
  accessor: keyof T;
  width?: string;
  formatter?: (value: T[keyof T], row: T) => ReactNode;
};

const columns: ColumnConfig<TimeSheet>[] = [
  {
    label: "Role",
    accessor: "role",
    width: "20%",
    formatter: (value: string | number | undefined) => {
      if (value === undefined) {
        return <span className="text-gray-500">N/A</span>; // Fallback for undefined
      }
      if (typeof value === "string") {
        return <h3 className="text-base text-white font-medium">{value}</h3>;
      }
      return <>{value}</>; // If it's a number, return the value as JSX
    },
  },
  {
    label: "Job Folder",
    accessor: "jobFolder",
    width: "20%",
    formatter: (value: string | number | undefined) => {
      if (value === undefined) {
        return <span className="text-gray-500">N/A</span>; // Fallback for undefined
      }
      if (typeof value === "string") {
        return <h3 className="text-base text-white font-medium">{value}</h3>;
      }
      return <>{value}</>; // Return the number value as JSX
    },
  },
  {
    label: "Start",
    accessor: "start",
    width: "12%",
    formatter: (value: string | number | undefined) => {
      if (typeof value === "number" || typeof value === "string") {
        return <span className="text-[#C2C2C2] text-sm">{value}</span>;
      }
      return <>{value}</>; // Return the value as JSX
    },
  },
  {
    label: "End",
    accessor: "end",
    width: "12%",
    formatter: (value: string | number | undefined) => {
      return <p className={`  text-[#C2C2C2] text-sm`}>{value}</p>;
    },
  },
  {
    label: "Hours",
    accessor: "hours",
    width: "12%",
    formatter: (value: string | number | undefined) => {
      return <p className={`text-[#C2C2C2] text-sm`}>{value}</p>;
    },
  },
  {
    label: "Rate/hr",
    accessor: "rateH",
    width: "12%",
    formatter: (value: string | number | undefined) => {
      return <p className={`text-[#C2C2C2] text-sm`}>{value}</p>;
    },
  },
  {
    label: "Earnings",
    accessor: "earnings",
    width: "12%",
    formatter: (value: string | number | undefined) => {
      return <p className={`text-[#C2C2C2] text-sm`}>{value}</p>;
    },
  },
];

export default function TimeKeepingTable() {

const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3); // Default to 3 rows per page

  const indexOfLastProject = currentPage * rowsPerPage;
  const indexOfFirstProject = indexOfLastProject - rowsPerPage;
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject); // Paginated data

  const totalPages = Math.ceil(data.length / rowsPerPage); // Total pages for pagination

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page); // Set current page if valid
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page change
  };



  return (
    <div className=" px-4 bg-[#151515] rounded-t-3xl">
          <div className=" py-6 px-4 flex justify-between items-center ">
            <h2 className=" text-lg text-white font-semibold ">
              Recent Timesheet Entries
            </h2>
            <p className=" text-white text-base font-semibold py-2 px-3 common_btn_bg rounded-[10px]">
              View All
            </p>
          </div>
          <DynamicTable
            columns={columns}
            data={currentProjects} // Paginated data
            // noDataMessage="No Projects Found"
            hasWrapperBorder={true}
            wrapperBorderColor="#1F1F1F"
            headerStyles={{
              backgroundColor: "#1F1F1F",
              textColor: "#ffffff",
              fontSize: "14px",
              padding: "20px 30px",
            }}
            cellBorderColor="#1F1F1F"
            currentPage={currentPage}
            itemsPerPage={rowsPerPage}
            onPageChange={handlePageChange} // Pass the page change handler
          />
            {/* Pagination Controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center py-3 px-4 sm:px-6">
            <div className="flex items-center">
              <label className="mr-2 text-sm text-white">
                Show rows per page
              </label>
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className=" bg-[#242427]  text-white p-2 text-sm rounded-md cursor-pointer"
              >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>

            <div className=" flex items-center gap-4 min-w-0">
              <div className="text-sm whitespace-nowrap text-white">
                <span>
                  {indexOfFirstProject + 1}-{indexOfLastProject} of{" "}
                  {data.length}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  className="p-2 text-white rounded-md shrink-0 cursor-pointer common_btn_bg"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <LeftArrowPaginationIcon />
                </button>

                <button
                  className="p-2 text-white rounded-md shrink-0 cursor-pointer common_btn_bg"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                   <RightArrowPaginationIcon/>
                </button>
              </div>
            </div>
          </div>

          </div>
  )
}
