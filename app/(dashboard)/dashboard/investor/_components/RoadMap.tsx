import React from "react";
import CustomTab from "../../../_components/reusable/CustomTab";
 
import RoadMapCards from "./RoadMapCards";
 
 

const tabs = [
  { name: 'All', content: <RoadMapCards/> },
  { name: 'Investment', content: <RoadMapCards/> },
  { name: 'UI/UX', content:  <RoadMapCards/> },
  { name: 'Software Developer', content:  <RoadMapCards/> },
  { name: 'Marketing', content:  <RoadMapCards/> },
];
 

export default function RoadMap() {
  return (
    <div className=" p-4 bg-[#151515] mt-6 rounded-[24px]">
      <div className=" flex justify-between items-center border-b border-[#1F1F1F] pb-2">
        <h2 className=" text-white text-[20px] font-semibold">
          Roadmap Tracker
        </h2>
        <button className="roadmap_view_all_btn">view All</button>
      </div>
      <CustomTab tabs={tabs}/>
     
    </div>
  );
}
