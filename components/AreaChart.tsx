"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", this_week: 186, last_week: 80 },
  { month: "February", this_week: 305, last_week: 200 },
  { month: "March", this_week: 237, last_week: 120 },
  { month: "April", this_week: 73, last_week: 190 },
  { month: "May", this_week: 209, last_week: 130 },
  { month: "June", this_week: 214, last_week: 140 },
]

const chartConfig = {
  this_week: {
    label: "This week",
    color: "#47ABA0",
  },
  last_week: {
    label: "Last week",
    color: "#47ABA0",
  },
} satisfies ChartConfig

const ArearChartComp = () => {
    const [filter, setFilter] = useState<"all" | "this_week" | "last_week">("all");

    // Adjust filtered data to include all keys
const filteredData = chartData.map((data) => ({
    day: data.month,
    this_week: filter === "all" || filter === "this_week" ? data.this_week : 0,
    last_week: filter === "all" || filter === "last_week" ? data.last_week : 0,
  }));
  return (
    <Card className="relative min-h-200px">
           {/* Filter Select Input */}
      <div className="flex items-center gap-2">
        <label htmlFor="filter" className="block font-bold text-md text-gray-600">
        Saving summary
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as "all" | "this_week" | "last_week")}
          className="border border-gray-300 focus:outline-none rounded-md p-1"
        >
          <option value="all">All</option>
          <option value="this_week">This week</option>
          <option value="last_week">Last week</option>
        </select>
      </div>
      
        {/* Legend */}
        <div className="absolute top-2 right-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-2"
            style={{ backgroundColor: chartConfig.this_week.color }}
          />
          <span className="text-xs text-gray-600">{chartConfig.this_week.label}</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-2"
            style={{ backgroundColor: chartConfig.last_week.color }}
          />
          <span className="text-xs text-gray-600">{chartConfig.last_week.label}</span>
        </div>
      </div>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="last_week"
              type="natural"
              fill="var(--color-last_week)"
              fillOpacity={0.4}
              stroke="var(--color-last_week)"
              stackId="a"
            />
            <Area
              dataKey="this_week"
              type="natural"
              fill="var(--color-this_week)"
              fillOpacity={0.4}
              stroke="var(--color-this_week)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ArearChartComp;