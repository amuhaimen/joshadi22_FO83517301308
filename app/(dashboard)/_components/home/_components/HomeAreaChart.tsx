"use client"

import { AreaChart, Area, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A dark-themed area chart with target and progress"

const chartData = [
  { month: "Apr 1", target: 400, progress: 180 },
  { month: "Apr 5", target: 300, progress: 120 },
  { month: "Apr 9", target: 450, progress: 220 },
  { month: "Apr 13", target: 320, progress: 200 },
  { month: "Apr 17", target: 480, progress: 300 },
  { month: "Apr 21", target: 350, progress: 250 },
  { month: "Apr 25", target: 500, progress: 280 },
  { month: "Apr 29", target: 420, progress: 210 },
  { month: "May 3", target: 460, progress: 310 },
  { month: "May 7", target: 430, progress: 250 },
  { month: "May 11", target: 470, progress: 270 },
  { month: "May 15", target: 440, progress: 220 },
  { month: "May 19", target: 460, progress: 240 },
  { month: "May 23", target: 430, progress: 230 },
  { month: "May 27", target: 420, progress: 210 },
]

const chartConfig = {
  target: {
    label: "Target",
    color: "#3b82f6", // Blue
  },
  progress: {
    label: "Progress",
    color: "#10b981", // Green
  },
} satisfies ChartConfig

export function HomeAreaChart() {
  return (
    <Card className="border-none bg-[#161616]">
      <CardHeader>
        <CardTitle className="text-white">Statistic</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            width={600}
            height={250}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              stroke="#ccc"
              style={{ fontSize: 12 }}
            />
            <YAxis
              hide
              domain={[0, 500]}
              tickCount={5}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
           
            <defs>
              <linearGradient id="progressGradient-2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#21AF68" stopOpacity={1} />
                <stop offset="95%" stopColor="white" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="target"
              stroke="#21AF68"
              fill="url(#progressGradient-2)"
              fillOpacity={0.25}
              strokeWidth={2}
              dot={false}
            />
             <defs>
              <linearGradient id="progressGradient-1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor= "white" stopOpacity={1} />
                <stop offset="100%" stopColor="#55300C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="progress"
              stroke="#FC9736"
              fill="url(#progressGradient-1)"
              fillOpacity={0.15}
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
