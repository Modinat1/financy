"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardFooter } from "./ui/card"
const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]

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

const Charts = () => {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
        <>
        <ChartContainer
          config={chartConfig}
          className="aspect-square h-[130%] max-w-[250px]"
        //   className="aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={50}
            outerRadius={80}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                            20k
                          {/* {totalVisitors.toLocaleString()} */}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        
        </ChartContainer> 
        {/* <CardFooter>
          <h3 className="text-xs">Target vs Achievement</h3>
          </CardFooter>    */}
        </>
  )
}

export default Charts