"use client";

import SectionHeader from "../../_components/reusable/SectionHeader";
import InvestorCharts from "./_components/InvestorCharts";
 

import OtherInvestor from "./_components/OtherInvestor";
import ProjectSearch from "./_components/ProjectSearch";

import RoadMap from "./_components/RoadMap";
import UpcomingMet from "./_components/UpcomingMet";

export default function Investor() {
  return (
    <div>
      <div>
        <SectionHeader
          title="Investor Management Overview"
          breadcrumb={['Investor']}
          showMonthly={true}
          addProject={false}
          payoutLink={false}
        />
      </div>
       <InvestorCharts/>
      <RoadMap />
      <div className=" flex flex-col lg:flex-row mt-6 gap-6 w-full">
        <div className="  flex-1 ">
          <UpcomingMet />
        </div>
        <div className="  flex-1 ">
          <OtherInvestor />
        </div>
      </div>
      <ProjectSearch />
    </div>
  );
};
