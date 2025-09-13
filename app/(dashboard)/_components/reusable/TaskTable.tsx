"use client";
import { RiFlag2Fill } from "react-icons/ri";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

// Define the types for the project data
interface Task {
    name: string;
    assigne: string;
    empImage: StaticImageData;
    priority: number;
    dueDate: string;
    status: string;
}

interface TaskTableProps {
    tasks: Task[];
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3); // Default to 3 rows per page

    const indexOfLastTask = currentPage * rowsPerPage;
    const indexOfFirstTask = indexOfLastTask - rowsPerPage;
    const currenttasks = tasks.slice(
        indexOfFirstTask,
        indexOfLastTask
    );

    const totalPages = Math.ceil(tasks.length / rowsPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to the first page when  rows per page change
    };

    return (
        <div>
            <table className="min-w-full  table-auto text-white">
                <thead className="bg-[#1f1f1f]">
                    <tr className="text-sm border-b border-[#1f1f1f] py-10 ">
                        <th className="py-5 px-6 text-left text-sm text-nowrap">tasks</th>
                        <th className="py-5 px-6 text-left text-sm text-nowrap">Assigned</th>
                        <th className="py-5 px-6 text-left text-sm text-nowrap">Priority</th>
                        <th className="py-5 px-6 text-left text-sm text-nowrap">Status</th>
                        <th className="py-5 px-6 text-left text-sm text-nowrap">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {currenttasks.map((Task, index) => (
                        <tr key={index} className=" mt-[50px] border-b border-[#1f1f1f]">
                            <td className="text-base text-nowrap font-medium py-5 px-6">
                                {Task.name}
                            </td>
                            <td className="text-base font-medium py-5 px-6">
                                <div className="flex gap-2">
                                    {!Task.assigne.includes("$") &&
                                        <div className="shrink-0">
                                            <Image src={Task.empImage} alt={Task.assigne} width={20} height={20} />
                                        </div>
                                    }
                                    <div className="flex-1">
                                        <span className="text-nowrap">{`${Task.assigne}`}</span>
                                    </div>
                                </div>
                            </td>

                            <td className="text-base font-medium py-5 px-6 flex items-center gap-2">
                                {/* <div className="w-full bg-white h-2 rounded-full">
                                    <div
                                        className="h-2 rounded-full"
                                        style={{
                                            width: `${Task.priority}%`,
                                            backgroundColor:
                                                Task.status === "Completed"
                                                    ? "#30c47a"
                                                    : Task.status === "In Progress"
                                                        ? "#ffba69"
                                                        : "#ff708b",
                                        }}
                                    ></div>
                                </div> */}
                                <span
                                    className={`text-nowrap ${Task.status === "Completed"
                                        ? "text-[#2fa86b]"
                                        : Task.status === "In Progress"
                                            ? "text-[#f1b064]"
                                            : "text-[#ff708b]"
                                        }`}
                                >
                                    <RiFlag2Fill className="inline-flex mr-2 " />


                                    {`${Task.priority >= 80
                                        ? "High"
                                        : Task.priority >= 50
                                            ? "Medium"
                                            : "Normal"
                                        }`}


                                </span>
                            </td>
                            <td className="py-5 px-6">
                                <span
                                    className={`text-nowrap rounded-full py-1 px-3 ${Task.status === "Completed"
                                        ? "complete"
                                        : Task.status === "In Progress"
                                            ? "on_going"
                                            : "unfinished"
                                        }`}
                                >
                                    {Task.status}
                                </span>
                            </td>
                            <td className="px-4 py-2 text-nowrap">{Task.dueDate}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center py-3 px-6 ">
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

                <div className=" flex items-center gap-4">
                    <div className="text-sm">
                        <span>
                            {indexOfFirstTask + 1}-{indexOfLastTask} of{" "}
                            {tasks.length}
                        </span>
                    </div>

                    <div className="flex items-center">
                        <button
                            className="p-2 text-white  rounded-md"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
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
                            className="p-2 text-white   rounded-md"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
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

export default TaskTable;
