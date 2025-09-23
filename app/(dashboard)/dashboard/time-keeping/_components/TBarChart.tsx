"use client";

 
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { day: "Sat", desktop: 186, mobile: 80,tab:39 },
  { day: "Sun", desktop: 305, mobile: 200,tab:67 },
  { day: "Mon", desktop: 237, mobile: 120,tab:150 },
  { day: "Tue", desktop: 73, mobile: 190,tab:54 },
  { day: "Wed", desktop: 209, mobile: 130,tab:86 },
  { day: "Thur", desktop: 214, mobile: 140 ,tab:92},
  { day: "Fri", desktop: 0, mobile: 0 ,tab:250},
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  tab: {
    label: "Tablate",
    color: "#8676FF",
  },
} satisfies ChartConfig;

export function TBarChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <Card className=" border-none px-0">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-xl text-white font-semibold">
          Total Hours
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
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} barSize={30}>
            {/* <CartesianGrid vertical={false} horizontal={true}  /> */}
            <CartesianGrid strokeDasharray="6 6" vertical={false}  />

             
            <XAxis
              
              dataKey="day"
              tickLine={false}
              
              tickMargin={10}
             axisLine={true}
              tickFormatter={(value) => value.slice(0, 3)}
            
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />

            <Bar
              dataKey="desktop"
              stackId="a"
              fill="#FF708B"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="#01F1E3"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="tab"
              stackId="a"
              fill="#8676FF"
              radius={[4, 4, 0, 0]}
            />
            
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
