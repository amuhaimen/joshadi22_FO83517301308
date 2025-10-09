"use client"

import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from "react"

const chartData = [
  { month: "JANUARY", marketing: 1200 },
  { month: "FEBRUARY", marketing: 2800 },
  { month: "MARCH", marketing: 4200 },
  { month: "APRIL", marketing: 5800 },
  { month: "MAY", marketing: 7300 },
  { month: "JUNE", marketing: 6800 },
  { month: "JULY", marketing: 4500 },
  { month: "AUGUST", marketing: 6200 },
  { month: "SEPTEMBER", marketing: 7357 },
]

const chartConfig = {
  marketing: {
    label: "Marketing",
    color: "#22c55e",
  },
}

export default function InvestorLineChart() {

  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="   overflow-hidden rounded-3xl">
      <Card className="border-0 text-white p-0 shadow-none investor_pie_bg px-4 pt-5">
        <div className="flex items-center justify-between border-b border-[#1F1F1F]  pb-[10px]">
          <h2 className="text-xl font-semibold text-white">Market Trends</h2>
          <button className="common_btn_bg text-sm text-white font-semibold py-3 px-5 rounded-[10px]">
            View All
          </button>
        </div>
        <CardHeader className=" flex items-start justify-between ">
            <div>
          <CardTitle className=" text-white text-sm font-semibold">Fintech Investment</CardTitle>
          <CardDescription className=" text-xs text-[#E9E9EA]">Data from PitchBook</CardDescription>
            </div>

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
          <div className="w-full relative min-h-[300px]">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 10, right: 20, left: 30, bottom:80 }}
                >
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    domain={[0, 15000]}
                    tickFormatter={(value) => value.toLocaleString()}
                    ticks={[0, 2500, 5000, 7500, 10000, 12500, 15000]}
                    width={20}
                     tickMargin={1}
                  />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: "#E9E9EA" }}
                    tickMargin={8}
                    tickFormatter={(value) => value}
                    height={5}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Line
                    dataKey="marketing"
                    type="monotone"
                    stroke="#22c55e"
                    strokeWidth={5}
                    dot={false}
                    activeDot={{
                      r: 6,
                      fill: "#22c55e",
                      stroke: "#22c55e",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}










// "use client"

// import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
// import {
//   Card,
//   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// //   ChartTooltipContent,
// } from "@/components/ui/chart"

// const chartData = [
//   { month: "JANUARY", marketing: 1200 },
//   { month: "FEBRUARY", marketing: 2800 },
//   { month: "MARCH", marketing: 4200 },
//   { month: "APRIL", marketing: 5800 },
//   { month: "MAY", marketing: 7300 },
//   { month: "JUNE", marketing: 6800 },
//   { month: "JULY", marketing: 4500 },
//   { month: "AUGUST", marketing: 6200 },
//   { month: "SEPTEMBER", marketing: 7357 },
// ]

// const chartConfig = {
//   marketing: {
//     label: "Marketing",
//     color: "#22c55e",
//   },
// } satisfies ChartConfig

// export default function InvestorLineChart() {

//   return (
//     <div className="">
//       <Card className="border-none text-white">
//         <CardContent className="">

          
//           <div className="h-80 w-full relative">
//             <ChartContainer config={chartConfig} className="h-full w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                   data={chartData}
                  
//                 >
//                   <YAxis
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{ fontSize: 12, fill: '#6b7280' }}
//                     domain={[0, 15000]}
//                     tickFormatter={(value) => value.toLocaleString()}
//                     ticks={[0, 2500, 5000, 7500, 10000, 12500, 15000]}
//                   />
//                   <XAxis
//                     dataKey="month"
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{ fontSize: 12, fill: '#6b7280' }}
//                     tickMargin={16}
//                     tickFormatter={(value) => value}
//                   />
//                   {/* <ChartTooltip
//                     cursor={{ stroke: '#374151', strokeWidth: 1 }}
//                     content={({ active, payload, label }) => {
//                       if (active && payload && payload.length) {
//                         return (
//                           <div className="bg-gray-800 border border-gray-700 rounded-lg p-3">
//                             <p className="text-gray-300 text-sm">{label}</p>
//                             <p className="text-green-500 font-semibold">
//                               ${payload[0].value?.toLocaleString()}
//                             </p>
//                           </div>
//                         );
//                       }
//                       return null;
//                     }}
//                   /> */}
//                       <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//                   <Line
//                     dataKey="marketing"
//                     type="monotone"
//                     stroke="#22c55e"
//                     strokeWidth={3}
//                     dot={false}
//                     activeDot={{ 
//                       r: 6, 
//                       fill: "#22c55e",
//                       stroke: "#22c55e",
//                       strokeWidth: 2 
//                     }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </ChartContainer>

//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }