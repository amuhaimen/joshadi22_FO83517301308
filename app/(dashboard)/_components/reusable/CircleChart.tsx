

"use client"
 
import { Label,PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
   
    CardContent,
    CardDescription,
   
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
 

export const description = "A radial chart with a label"

const chartData = [
    { browser: "Software developer", visitors: 275, fill: "#ffba69" },
    { browser: "UI / UX", visitors: 200, fill: "#6d6d6e" },
    { browser: "Full Stack Dev", visitors: 187, fill: "#ff708b" },
    { browser: "Project MGT", visitors: 173, fill: "#01f1e3" },
    { browser: "Investor", visitors: 290, fill: "#8676ff" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
     },
    chrome: {
        label: "Software developer",
        color: "var(--chart-1)",
    },
    safari: {
        label: "UI / UX",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Full Stack Dev",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Project MGT",
        color: "var(--chart-4)",
    },
    other: {
        label: "Investor",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig


export default function CircleChart() {
    return (
        <div className="p-6 flex items-center  ">
           
            <div className="flex flex-col w-full text-white ">
                <CardHeader className="items-center w-full p-0">
                    <CardTitle>Radial Chart - Label</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                    <CardContent className="w-full   p-0">
                        <div className="flex-1">
                            <ChartContainer
                            config={chartConfig}
                            className="mx-auto aspect-square max-h-[250px] md:max-h-[380px]  "
                            >
                            
                                <RadialBarChart className="w-full h-full flex "
                                data={chartData}
                                
                                    innerRadius={60}
                                    barGap={3}
                                    barSize={5}
                                    outerRadius={130}
                                
                                >
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel nameKey="browser" />}
                                    />
                                    <RadialBar dataKey="visitors" radius={100} background={{ fill: "#1e2f26" }} />
                                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                        <Label
                                            content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-background text-4xl font-bold  "
                                                    >
                                                    {chartData[0].visitors.toLocaleString()}
                                                    </tspan>
                                                    <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-background"
                                                    >
                                                    Visitors
                                                    </tspan>
                                                </text>
                                                )
                                                }
                                            }}
                                        />
                                    </PolarRadiusAxis>
                                </RadialBarChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
            </div>     
            <div className="  hidden xl:flex flex-col gap-8 w-full max-w-[250px]  ">
                <div>
                    <div className="  text-white text-sm font-semibold font-['Urbanist']">Total Value of  Project</div>
                    <div className="w-full text-white text-2xl font-semibold font-['Urbanist'] leading-normal">$445,00</div>
                </div>
                <div className="flex flex-col gap-4 ">
                    {chartData.map((items,index)=>(
                        <div key={index} className="flex gap-5 items-center justify-between">
                            <div className="flex gap-2 items-center justify-start" >
                                <div className="  rounded-full p-0 m-0 w-3 h-3"  style={{ background: items.fill  }} />
                                <span className="text-white">{items.browser}</span>
                            </div>
                            <span className="  text-neutral-300 text-sm font-normal font-['Urbanist'] leading-relaxed">${items.visitors}</span>
                        </div>
                    ))}
                </div>
            </div>       
        </div>
    );
}


// "use client"
// import React from 'react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// const data = [

//     {
//         name: 'Software developer',
//         uv: 200,
//         pv: 1398,
//         fill: '#ffba69',
//     },
//     {
//         name: 'UI / UX',
//         uv: 112,
//         pv: 9800,
//         fill: '#6d6d6e',
//     },
//     {
//         name: 'Full Stack Dev',
//         uv: 120,
//         pv: 3908,
//         fill: '#ff708b',
//     },
//     {
//         name: 'Project MGT',
//         uv: 100,
//         pv: 4800,
//         fill: '#01f1e3',
//     },
//     {
//         name: 'Investor',
//         uv: 68,
//         pv: 4800,
//         fill: '#8676ff',
//     },
    
// ]; 

// const style = {
//     top: '50%',
//     right: 0,
//     transform: 'translate(0, -50%)',
//     lineHeight: '30px',
//     color: 'white',
    

// };

// export default function CircleChart() {
//     return (

//              <ResponsiveContainer width="100%" height={330} >
//             <RadialBarChart  cx="30%" cy="50%" innerRadius="30%" outerRadius="100%" barGap={3} barSize={5} data={data} startAngle={-90} >
//                 <RadialBar
                
//                     // label={{ position: 'insideStart', fill: '#fff'  }}
//                     dataKey="uv"
//                     radius={100}
//                 />
//                 <Legend width={130} height={0} iconSize={10} iconType='circle' layout="vertical" verticalAlign="middle" wrapperStyle={style} />
//             </RadialBarChart>
//         </ResponsiveContainer>
 
//     );
// }
