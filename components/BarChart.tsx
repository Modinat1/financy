"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { day: "17 Sun", desktop: 186, mobile: 80 },
  { day: "18 Mon", desktop: 305, mobile: 200 },
  { day: "19 Tue", desktop: 237, mobile: 120 },
  { day: "20 Wed", desktop: 73, mobile: 190 },
  { day: "21 Thur", desktop: 209, mobile: 130 },
  { day: "22 Fri", desktop: 214, mobile: 140 },
  { day: "23 Sat", desktop: 157, mobile: 90 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#E8E8E8",
  },
  mobile: {
    label: "Mobile",
    color: "#299D91",
  },
} satisfies ChartConfig

const StatisticsBarchart = () => {
  return (
  
      <div className="bg-white rounded-lg">
        <ChartContainer config={chartConfig} className="max-h-[210px] w-full">
          <BarChart accessibilityLayer 
          data={chartData}
          barSize={20} 
          height={50}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
            //   tickMargin={10}
              axisLine={false}
            //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
        </div>
  )
}

export default StatisticsBarchart;
