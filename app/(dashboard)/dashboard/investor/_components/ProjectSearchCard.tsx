import Image from "next/image";
import React from "react";
import teamImg from '@/public/Team.png'


interface ProjectSearchCardProps {
  projectName: string;
  status: string // Can be 'active' or 'at risk'
  description: string;
  funding: string;
  progress: number; // Percentage for the progress bar
  dueDate: string;
}


export default function ProjectSearchCard({
  projectName,
  status,
  description,
  funding,
  progress,
  dueDate,
}: ProjectSearchCardProps) {
  return (
    <div className="   bg-[#1f1f1f] px-6 py-4 rounded-[16px] mt-5" >
      <div className=" flex justify-between">
        <h3 className=" text-white font-semibold text-sm">{projectName}</h3>
        <p className={`${status==='Active'?'text-[#21AF68]  common_btn_bg':'text-[#FFBA69] at_risk_bg'}  px-2 py-1  rounded-full`}>{status}</p>
      </div>
      <p className=" text-[#D2D2D5] text-xs mt-2">
       {description}
      </p>
       <div className=" mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[#D2D2D5] font-medium">{funding}</span>
          <span className="text-xs font-bold text-[#D2D2D5]">{progress}%</span>
        </div>
        <div className="w-full bg-[#4A4C56] rounded-full h-2">
          <div className={`${status==='Active'?'roadmap_progress_bg':'bg-[#FFBA69]'}  h-2 rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className=" flex justify-between items-center mt-4">
        <Image src={teamImg} alt="team img" />
        <p className=" text-[#E9E9EA] text-xs font-semibold">{dueDate}</p>
      </div>
    </div>
  );
}
