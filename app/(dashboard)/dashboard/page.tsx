
import ProjectScreenshot from "../_components/home/_components/ProjectScreenshot";
import MarketInsights from "../_components/home/_components/MarketInsights";
// import FeaturedProject from "./_components/home/_components/FeaturedProject";
import Chart from "../_components/home/_components/Chart";
import ProjectOverviewCard from "../_components/reusable/ProjectOverviewCard";
import SectionHeader from "../_components/reusable/SectionHeader";
//  import AreaBarChart from "./_components/reusable/AreaBarChart";
import CircleChart from "../_components/reusable/CircleChart";
 
import FeaturedProject from "../_components/home/_components/FeaturedProject";
// import AreaBarChart from "./_components/reusable/AreaBarChart";

 
const cardData = [
  {
    title: "Total Project",
    parcentage: "89.5%",
    trendPercentage: "10%",
    trendChange: "+150 today",
    isPsitiveTrend: true,
  },
  {
    title: "Total Project",
    parcentage: "89.5%",
    trendPercentage: "10%",
    trendChange: "+150 today",
    isPsitiveTrend: false,
  },
  {
    title: "Total Project",
    parcentage: "89.5%",
    trendPercentage: "10%",
    trendChange: "+150 today",
    isPsitiveTrend: true,
  },
  {
    title: "Total Project",
    parcentage: "89.5%",
    trendPercentage: "10%",
    trendChange: "+150 today",
    isPsitiveTrend: false,
  },
];

const breadcrumb = ["Dashboard", "Project Management Overview"];

export default function DashboardHome() {
  return (
    <div>
      <SectionHeader
        title="Project Management Overview"
        breadcrumb= {breadcrumb}
        showMonthly={true}
        addProject={true}
        payoutLink={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {cardData.map((item, index) => (
          <ProjectOverviewCard
            key={index}
            title={item.title}
            percentage={item.parcentage}
            trendPercentage={item.trendPercentage}
            trendChange={item.trendChange}
            isPositiveTrend={item.isPsitiveTrend}
          />
        ))}
      </div>
      <div className='flex flex-col lg:flex-row gap-4 md:gap-6'>

        <div className='  w-full mt-6 bg-[#161616] rounded-2xl '>
          <Chart />
        </div>
        <div className='  w-full  mt-6 bg-[#161616] rounded-2xl '>
          <CircleChart />
        </div>
      </div>

       
      <FeaturedProject/>
      <ProjectScreenshot />
      <MarketInsights />
    </div>
  );
}
