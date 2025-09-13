"use client";

import ProjectScreenshotCard from "../../ProjectScreenshotCard";
import CustomTab from "../../reusable/CustomTab";

const tabs = [
  { name: 'All', content: <ProjectScreenshotCard /> },
  { name: 'UI/UX', content: <ProjectScreenshotCard /> },
  { name: 'Full Stack', content: <ProjectScreenshotCard /> },
  { name: 'Software Developer', content: <ProjectScreenshotCard /> },
];
 

export default function ProjectScreenshot() {
  return (
    <div className="">
      <h2 className=" text-2xl font-semibold text-white mb-4 mt-6">
        Projects Screenshot
      </h2>
      <div className=" bg-[#141414] rounded-t-[24px] rounded-b-[4px]  pt-6">
        <CustomTab  tabs={tabs}/>
      </div>
    </div>
  );
}
