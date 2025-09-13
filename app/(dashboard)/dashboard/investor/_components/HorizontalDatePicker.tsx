"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VisibleDate {
  date: number;
  dayName: string;
}

const HorizontalDatePicker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<number>(23);
  const [startIndex, setStartIndex] = useState<number>(19); // Start showing from 20th

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const navigateMonth = (direction: number): void => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
    setStartIndex(0);
    setSelectedDate(1);
  };

  const slideDates = (direction: number): void => {
    const daysInMonth = getDaysInMonth(currentDate);
    const newStartIndex = startIndex + direction;

    // ✅ Ensure last batch shows full month including 31
    if (newStartIndex >= 0 && newStartIndex < daysInMonth) {
      setStartIndex(newStartIndex);
    }
  };

  const generateVisibleDates = (): VisibleDate[] => {
    const daysInMonth = getDaysInMonth(currentDate);
    const dates: VisibleDate[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const dayOfWeek = date.getDay();
      dates.push({
        date: i,
        dayName: weekdays[dayOfWeek],
      });
    }

    return dates.slice(startIndex, startIndex + 7);
  };

  const visibleDates = generateVisibleDates();
  const daysInMonth = getDaysInMonth(currentDate);

  return (
    <div className=" ">
      {/* monnth navigation */}
      <div className=" flex justify-between items-center border border-[#ffffff0d] p-3 rounded-lg mt-4 bg-[#1F1F1F]">
        <h3 className="text-base font-medium text-[#A5A5AB]">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>

        <div className=" flex items-center gap-1">
          <button onClick={() => navigateMonth(-1)} className=" arrow_btn">
            <ChevronLeft size={20} className="text-[#3FD98B]" />
          </button>
          <button onClick={() => navigateMonth(1)} className="arrow_btn">
            <ChevronRight size={20} className="text-[#3FD98B]" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-6 border-b">
        <button
          onClick={() => slideDates(-1)}
          disabled={startIndex === 0}
          // className={`p-1 rounded transition-colors ${
          //   startIndex === 0
          //     ? "text-gray-600 cursor-not-allowed"
          //     : "text-gray-400 hover:bg-gray-800"
          // }`}
          className="arrow_btn_date"
        >
          <ChevronLeft size={20} className=" text-base text-[#3FD98B]" />
        </button>

        <div className="flex space-x-4 flex-1 justify-center overflow-hidden">
          <div
            className="flex space-x-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(0)` }}
          >
            {visibleDates.map((item) => (
              <button
                key={item.date}
                onClick={() => setSelectedDate(item.date)}
                className={`flex flex-col px-4 py-3 rounded-[9px] ${
                  selectedDate === item.date
                    ? "active_date border border-[#ffffff0d]"
                    : "text-base text-[#A5A5AB] font-medium"
                }`}
              >
                <span  >{item.date}</span>
                <span  className=" text-xs font-normal">{item.dayName}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => slideDates(1)}
          disabled={startIndex + 7 >= daysInMonth}
          // className={`p-1 rounded transition-colors ${
          //   startIndex + 7 >= daysInMonth
          //     ? "text-gray-600 cursor-not-allowed"
          //     : "text-gray-400 hover:bg-gray-800"
          // }`}
          className="arrow_btn_date"
        >
          <ChevronRight size={20} className=" text-base text-[#3FD98B]"/>
        </button>
      </div>

       
    </div>
  );
};

export default HorizontalDatePicker;
