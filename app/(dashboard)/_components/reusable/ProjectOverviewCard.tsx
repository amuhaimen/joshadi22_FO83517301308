import React from 'react';
//  import { MoveDownRight,MoveUpRight  } from 'lucide-react';
import GreenTopRightIcon from '@/public/investor/icons/GreenTopRightIcon';
import RedBottomRightIcon from '@/public/investor/icons/RedBottomRightIcon';

// Define types for the props
interface ProjectOverviewCardProps {
  title: string; // The title of the card (e.g., "Total Project")
  percentage: string; // The percentage of progress (e.g., "89.5%")
  trendPercentage: string; // The trend percentage (e.g., "+10%" or "-5%")
  trendChange?: string; // Today's change (e.g., "+150 today")
  isPositiveTrend?: boolean; // Boolean to check if the trend is positive or negative
}

const ProjectOverviewCard: React.FC<ProjectOverviewCardProps> = ({
  title,
  percentage,
  trendPercentage,  
  trendChange,
  isPositiveTrend,
}) => {
  return (
    <div className="py-5 px-6 rounded-3xl shadow-md project_overview_card_bg w-full ">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="flex  items-end justify-between mt-4">
        <h2 className="text-[32px] font-semibold text-white">{percentage}</h2>
        <div className="flex flex-col items-end gap-[11px]">
          {/* Icon and Trend Section */}
          <div className="flex items-center  gap-1 text-sm text-semibold">
            <div
              className={`${
                isPositiveTrend ? 'text-[#14CB74]' : 'text-[#F16363]'
              }`}
            >
              {isPositiveTrend ?   <GreenTopRightIcon/>:   <RedBottomRightIcon/>}
            </div>
            <p className={isPositiveTrend ? 'text-[#14CB74]' : 'text-[#F16363]'}>
              {trendPercentage}
            </p>
          </div>
          {/* Today's Change */}
          <p className="text-sm text-[#D2D2D5]">{trendChange}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewCard;
