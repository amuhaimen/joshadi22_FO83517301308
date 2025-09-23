"use client"

 import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from "react"

export const description = "A donut chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#8676FF" },
  { browser: "safari", visitors: 200, fill: "#01F1E3" },
  { browser: "firefox", visitors: 187, fill: "#FF708B" },
 
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function TPieChart() {

const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <Card className="flex flex-col border-none">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-xl text-white font-semibold">
            Earnings by Role
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
      
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              paddingAngle={4}
              cornerRadius={6}
              
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
