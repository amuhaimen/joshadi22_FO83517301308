"use client";

import { ChartPieDonut } from "./ChartPieDonut";
import InvestorLineChart from "./InvestorLineChart";

export default function InvestorCharts() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-8">
      {/* Left Chart Component */}
      <div className="flex-1 min-w-[300px] md:h-full  "> {/* Ensure equal height and background */}
        <ChartPieDonut />
      </div>
      
      {/* Right Chart Component */}
      <div className="flex-1 min-w-[300px] md:h-full"> {/* Ensure equal height and background */}
        <InvestorLineChart />
      </div>
    </div>
  );
}

 
