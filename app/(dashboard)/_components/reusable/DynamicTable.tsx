"use client";

import Image from "next/image";
import React from "react";
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSelector,
} from "react-icons/hi";

export interface ColumnConfig<T> {
  label: React.ReactNode;
  width?: string | number;
  accessor: keyof T;
  sortable?: boolean;
  formatter?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface SortConfig {
  key: string;
  direction: "ascending" | "descending";
}

interface DynamicTableProps<T> {
  columns: ColumnConfig<T>[];
  data: T[];
  currentPage?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
  onView?: (row: T) => void;
  onDelete?: (id: string | number) => void;
  noDataMessage?: string;
  sortConfig?: SortConfig | null;
  onSort?: (key: string) => void;
  minWidth?: boolean;

  headerStyles?: {
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    padding?: string;
  };
  borderColor?: string;
  cellBorderColor?: string;
  hasWrapperBorder?: boolean;
  wrapperBorderColor?: string;
}

export default function DynamicTable<T extends { id?: string | number }>({
  columns,
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
  onView,
  onDelete,
  noDataMessage = "No data found.",
  sortConfig,
  onSort,
  minWidth,
  headerStyles = {
    backgroundColor: "#F3F4F6",
    textColor: "#4a4c56",
    fontSize: "14px",
  },
 
  cellBorderColor = "#EDEDED",
  hasWrapperBorder = true,
  wrapperBorderColor = "#EDEDED",
}: DynamicTableProps<T>) {
  const totalPages = itemsPerPage ? Math.ceil(data.length / itemsPerPage) : 0;
  const paginatedData = itemsPerPage
    ? data.slice(
        ((currentPage ?? 1) - 1) * itemsPerPage,
        (currentPage ?? 1) * itemsPerPage
      )
    : data;

  const renderSortIcon = (columnKey: string) => {
    if (!sortConfig || sortConfig.key !== columnKey) {
      return <HiOutlineSelector className="w-5 h-5 text-headerColor" />;
    }
    if (sortConfig.direction === "ascending") {
      return <HiOutlineChevronUp className="w-4 h-4" />;
    }
    return <HiOutlineChevronDown className="w-4 h-4" />;
  };

  return (
    <div>
      <div
        className="overflow-hidden rounded-t-md "
        style={{
          border: hasWrapperBorder ? `1px solid ${wrapperBorderColor}` : "none",
        }}
      >
        <div className="overflow-x-auto">
          <table
            className={`${
              minWidth ? "900px" : "min-w-[1000px]"
            } w-full text-left`}
          >
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="text-[#A5A5AB] px-4 py-3 whitespace-nowrap text-base font-light capitalize text-descriptionColor"
                    style={{
                      width: col.width || "auto",
                      backgroundColor: headerStyles.backgroundColor,
                      color: headerStyles.textColor,
                      fontSize: headerStyles.fontSize,
                      padding: headerStyles.padding,
                    }}
                  >
                    <div
                      className={`flex items-center gap-1 ${
                        col.sortable ? "cursor-pointer" : ""
                      }`}
                      onClick={() => col.sortable && onSort && onSort(col.accessor as string)}
                    >
                      {col.label}
                      {col.sortable && renderSortIcon(col.accessor as string)}
                    </div>
                  </th>
                ))}
                {(onView || onDelete) && (
                  <th className="px-4 py-3 text-base font-medium text-[#4a4c56] border-b border-border">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {paginatedData?.length > 0 ? (
                paginatedData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#EDEDED]"
                  >
                    {columns.map((col, idx) => (
                      <td
                        key={idx}
                        style={{
                          minWidth: col.width || "auto",
                          borderBottom: `1px solid ${cellBorderColor}`,
                        }}
                        className="px-4 py-3 text-[#4a4c56]"
                      >
                        {col.formatter
                          ? col.formatter(row[col.accessor], row)
                          : (row[col.accessor] as React.ReactNode)}
                      </td>
                    ))}
                    {(onView || onDelete) && (
                      <td className="px-4 py-3 flex gap-4 items-center">
                        {onView && (
                          <span
                            className="text-sm underline text-[#4a4c56] cursor-pointer"
                            onClick={() => onView(row)}
                          >
                            View details
                          </span>
                        )}
                        {onDelete && (
                          <Image
                            onClick={() => row.id && onDelete(row.id)}
                            src="/dashboard/icon/delete.svg"
                            alt="delete"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                          />
                        )}
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="px-4 py-10 text-center text-[#4a4c56] text-sm"
                  >
                    {noDataMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => onPageChange?.((currentPage ?? 1) - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm cursor-pointer rounded-sm text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange?.((currentPage ?? 1) + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm cursor-pointer rounded-sm text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
