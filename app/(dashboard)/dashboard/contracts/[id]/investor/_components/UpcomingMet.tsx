import PlusIcon from "@/public/icons/PlusIcon";
import React from "react";
import HorizontalDatePicker from "./HorizontalDatePicker";
import StraightRightArrow from "@/public/investor/icons/StraightRightArrow";
import Link from "next/link";
import MeetingList from "./MeetingList";

export default function UpcomingMet() {
  return (
    <div className=" bg-[#161616] p-4 rounded-3xl">
      <div className=" flex justify-between items-center">
        <h2 className=" text-white text-[20px] font-semibold">
          Upcoming Meeting
        </h2>
        <button className=" flex text-white items-center roadmap_view_all_btn">
          <PlusIcon /> Schedule
        </button>
      </div>
      <div className=" bg-[#191919] mt-4 rounded-2xl p-[18px] border border-[#1F1F1F]">
        <h3 className=" text-[18px] text-white font-medium">Calender</h3>
        <HorizontalDatePicker />
        <div className=" flex justify-between items-center mt-6">
          <h3 className=" text-white text-[18px] font-medium">
            Upcoming Schedule
          </h3>
          <Link
            href="#"
            className=" flex items-center gap-1 text-[#21AF68] font-"
          >
            <StraightRightArrow />
            View All
          </Link>
        </div>
        <MeetingList />
      </div>
    </div>
  );
}
