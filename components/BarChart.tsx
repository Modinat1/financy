"use client";

import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "17 Sun", this_week: 186, last_week: 80 },
  { day: "18 Mon", this_week: 305, last_week: 200 },
  { day: "19 Tue", this_week: 237, last_week: 120 },
  { day: "20 Wed", this_week: 73, last_week: 190 },
  { day: "21 Thur", this_week: 209, last_week: 130 },
  { day: "22 Fri", this_week: 214, last_week: 140 },
  { day: "23 Sat", this_week: 157, last_week: 90 },
];

const chartConfig = {
  this_week: {
    label: "This week",
    color: "#E8E8E8",
  },
  last_week: {
    label: "Last week",
    color: "#299D91",
  },
} satisfies ChartConfig;

const StatisticsBarchart = () => {
  const [filter, setFilter] = useState<"all" | "this_week" | "last_week">("all");

  // Adjust filtered data to include all keys
  const filteredData = chartData.map((data) => ({
    day: data.day,
    this_week: filter === "all" || filter === "this_week" ? data.this_week : 0,
    last_week: filter === "all" || filter === "last_week" ? data.last_week : 0,
  }));

  return (
    <div className="bg-white rounded-lg px-4 py-2 relative">
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

      {/* Filter Select Input */}
      <div className="flex items-center gap-2">
        <label htmlFor="filter" className="block font-bold text-md text-gray-600">
          Weekly comparison
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

      {/* Chart */}
      <ChartContainer config={chartConfig} className="max-h-[190px] w-full">
        <BarChart data={filteredData} barSize={20} height={200}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar
            dataKey="this_week"
            fill="var(--color-this_week)"
            radius={4}
            hide={filter === "last_week"}
          />
          <Bar
            dataKey="last_week"
            fill="var(--color-last_week)"
            radius={4}
            hide={filter === "this_week"}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default StatisticsBarchart;
