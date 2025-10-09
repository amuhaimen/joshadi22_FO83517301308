"use client";
import React, { ReactNode, useState } from "react";
import SectionHeader from "../../_components/reusable/SectionHeader";
import ProjectOverviewCard from "../../_components/reusable/ProjectOverviewCard";
import DynamicTable, { ColumnConfig } from "../../_components/reusable/DynamicTable";

import GreenMark from "@/public/icons/GreenMark";
import CrossIcon from "@/public/icons/CrossIcon";
import LeftArrowPaginationIcon from "@/public/icons/LeftArrowPaginationIcon";
import RightArrowPaginationIcon from "@/public/icons/RightArrowPaginationIcon";

const breadcrumb = ["Investor", "Investor Banking Overview"];

const cardData = [
  {
    title: "Available Balance",
    parcentage: "$3165,000",
    trendPercentage: "10%",
    trendChange: "this month",
    isPsitiveTrend: true,
  },
  {
    title: "Previous payout",
    parcentage: "$1,375,000",
    trendPercentage: "10%",
    trendChange: "this month",
    isPsitiveTrend: true,
  },
  {
    title: "Next payout",
    parcentage: "$1125,000",
    trendPercentage: "10%",
    trendChange: "this month",
    isPsitiveTrend: false,
  },
];

type PayoutRow = {
  projects: string;
  amount: string;
  depositDate: string | number;
  status: string;
  paymentMethodInfo?: string;
  id: number;
};

const data: PayoutRow[] = [
  {
    projects: "Software developer",
    amount: "$125,000",
    depositDate: 25,
    status: "Paid",
    paymentMethodInfo: "Bank Transfer",
    id: 1,
  },
  {
    projects: "UI / UX",
    amount: "$39,000",
    depositDate: "Aug 11, 2025",
    status: "Paid",
    paymentMethodInfo: "paypal",
    id: 2,
  },
  {
    projects: "Full Stack Dev",
    amount: "$52,000",
    depositDate: "Apr 01, 2025",
    status: "Pending",
    id: 3,
  },
  {
    projects: "Rebranding",
    amount: "$65,000",
    depositDate: "Sep 21, 2025",
    paymentMethodInfo: "paypal",
    status: "Paid",
    id: 3,
  },
];

const columns: ColumnConfig<PayoutRow>[] = [
  {
    label: "Projects",
    accessor: "projects",
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
    label: "Amount",
    accessor: "amount",
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
    label: "Deposit Date",
    accessor: "depositDate",
    width: "20%",
    formatter: (value: string | number | undefined) => {
     
      if (typeof value === "number" || typeof value === "string") {
        return (
          <span className="text-[#C2C2C2] text-sm">
            {value}
          </span>
        );
      }
      return <>{value}</>; // Return the value as JSX
    },
  },
  {
    label: "Status",
    accessor: "status",
    width: "20%",
    formatter: (value: string |number| undefined) => {
     
      const statusClass =
        value === "Paid" ? "text-[#FFBA69] on_going" : "text-[#FF708B] unfinished";
      return (
        <p className={`text-sm font-semibold ${statusClass} inline-block py-2 px-4 rounded-full`}>
          {value}
        </p>
      );
    },
  },
  {
    label: "Payment Method Info",
    accessor: "paymentMethodInfo",
    width: "20%",
    formatter: (value: unknown, row: { status: string }): ReactNode => {
     
      if (row.status === "Paid" && typeof value === "string") {
        return (
          <div className="flex items-center gap-2">
            <GreenMark />
            <span className="text-sm text-gray-300">{value}</span> {/* Show Payment Method Info */}
          </div>
        );
      } else if (row.status !== "Paid") {
        return (
          <div className="flex items-center gap-2">
            <CrossIcon />
          </div>
        );
      }
      return <>{value}</>; // Return the value as JSX if the condition is not met
    },
  },
];



export default function Page() {
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
    <div>
      <SectionHeader
        title="Project Manager Payout Overview"
        breadcrumb={breadcrumb}
        showMonthly={true}
        addProject={false}
        payoutLink={false}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {cardData.map((item, index) => (
          <ProjectOverviewCard
            key={index}
            title={item.title}
            percentage={item.parcentage}
            trendPercentage={item.trendPercentage}
            trendChange={item.trendChange}
            isPositiveTrend={item.isPsitiveTrend}
          />
        ))}
      </div>
      <div className=" bg-[#191919] px-4 pt-6 mt-4 rounded-t-3xl">
        <div className=" flex justify-between items-center ">
          <h2 className=" text-2xl text-white font-semibold">AIL payouts</h2>
          <button className=" text-sm font-semibold text-white common_btn_bg py-2 px-3 rounded-[10px]">
            View All
          </button>
        </div>
        <div className=" mt-8 pb-3">
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
              padding:'0px 0px'
            }}
            cellBorderColor="#1F1F1F"
            currentPage={currentPage}
            itemsPerPage={rowsPerPage}
            onPageChange={handlePageChange} // Pass the page change handler
            
          />

          {/* Pagination Controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center py-3 px-4 sm:px-6">
            <div className="flex items-center">
              <label className="mr-2 text-sm text-white">Show rows per page</label>
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
                  {indexOfFirstProject + 1}-{indexOfLastProject} of {data.length}
                </span>
              </div>

              <div className="flex items-center">
                <button
                  className="p-2 text-white rounded-md shrink-0 cursor-pointer"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <LeftArrowPaginationIcon />
                </button>

                <button
                  className="p-2 text-white rounded-md shrink-0 cursor-pointer"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <RightArrowPaginationIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}










