"use client";

import { Pie, PieChart } from "recharts";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ProjectOverviewCard from "../../../../../_components/reusable/ProjectOverviewCard";

const monthlyData = [
  { category: "UI / UX", value: 275000, fill: "#FF708B", percentage: 20 },
  { category: "Developer", value: 687500, fill: "#01F1E3", percentage: 50 },
  { category: "Marketing", value: 156250, fill: "#FFBA69", percentage: 15 },
  { category: "HR & Ops", value: 226250, fill: "#8676FF", percentage: 15 },
];

const chartConfig = {
  uiUx: {
    label: "UI / UX",
    color: "#FF708B",
  },
  developer: {
    label: "Developer",
    color: "#01F1E3",
  },
  marketing: {
    label: "Marketing",
    color: "#FFBA69",
  },
  hrOps: {
    label: "HR & Ops",
    color: "#8676FF",
  },
};

const cardData = [
  {
    title: "Total Budget",
    parcentage: "$2,500,000",
    trendPercentage: "12%",

    isPsitiveTrend: true,
  },
  {
    title: "Spent to Date",
    parcentage: "$1,375,000",
    trendPercentage: "3.1%",

    isPsitiveTrend: false,
  },
];

export function ChartPieDonut() {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="  ">
      <div className="flex flex-col  xl:flex-row gap-4 mb-4">
        {/* Display cards in flex row on large screens */}
        {cardData.map((item, index) => (
          <ProjectOverviewCard
            key={index}
            title={item.title}
            percentage={item.parcentage}
            trendPercentage={item.trendPercentage}
            isPositiveTrend={item.isPsitiveTrend}
          />
        ))}
      </div>
      <Card className="border-none  investor_pie_bg rounded-3xl">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-xl text-white font-semibold">
            Spending Breakdown
          </CardTitle>
          <select
            className="bg-[#161616] border border-[#373737] rounded-full text-sm text-[#E9E9EA] focus:outline-none focus:border-gray-400 py-2 px-2.5"
            value={selectedPeriod}
            onChange={(e) => handlePeriodChange(e.target.value)}
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[240px] mx-auto ">
            <ChartContainer
              config={chartConfig}
              className="w-full h-full rounded-full"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={monthlyData}
                  dataKey="value"
                  nameKey="category"
                  innerRadius={65}
                  outerRadius={95}
                  strokeWidth={0}
                  paddingAngle={4}
                  cornerRadius={6}
                  fill="#8884d8"
                />
              </PieChart>
            </ChartContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="flex items-center text-[#F16363] text-base gap-1 font-semibold">
                <span>3.1%</span>
              </div>
              <div className="text-xs text-[#D2D2D5] font-bold">-$1,200</div>
              <div className="text-xs text-[#D2D2D5] font-bold">this month</div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-center gap-2">
            {monthlyData.map((item, index) => (
              <div
                key={index}
                className="text-center border border-[#373737] bg-[#1F1F1F] py-2 px-3 rounded-lg"
              >
                <div className="flex items-center gap-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-white text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-5 mt-1">
                  <span className="text-white font-semibold text-sm">
                    ${item.value.toLocaleString()}
                  </span>
                  <span className="text-[#A5A5AB] text-sm">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
