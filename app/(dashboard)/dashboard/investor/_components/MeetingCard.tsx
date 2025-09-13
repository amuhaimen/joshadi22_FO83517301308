import React from 'react';
import ClockIcon from '@/public/investor/icons/ClockIcon';
import Image from 'next/image';
import groupAvatar from '@/public/investor/image/groupAvatar.png';

interface MeetingCardProps {
  title: string;
  time: string;
  description: string;
  location: string;
  buttonText: string;
}

export default function MeetingCard({
  title,
  time,
  description,
  location,
  buttonText,
}: MeetingCardProps) {
  return (
    <div className="border border-[#ffffff0d] bg-[#1F1F1F] rounded-3xl py-5 px-6  ">
      <div className="flex justify-between">
        <h3 className="text-[#E9E9EA] text-[18px] font-medium">{title}</h3>
        <div className="flex items-center gap-1">
          <ClockIcon />
          <p className="text-[#E9E9EA] text-sm">{time}</p>
        </div>
      </div>
      <p className="text-[#A5A5AB] text-sm font-sm mt-1">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-3">
          <Image src={groupAvatar} alt="group avatar" width={120} />
          <p className="text-xs text-[#A5A5AB]">{location}</p>
        </div>
        <button className={`common_btn_bg text-white text-md px-4 py-3 cursor-pointer ${buttonText==='Join Meeting'?"border border-[#3FD98B]":'border-none'}  font-semibold rounded-[10px]`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
