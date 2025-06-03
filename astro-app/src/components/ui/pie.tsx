"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "tailwind", usage: 88000, fill: "var(--color-chart-1)" },
  { browser: "bootstrap", usage: 162000, fill: "var(--color-chart-2)" },
  { browser: "bulma", usage: 48000, fill: "var(--color-chart-3)" },
]

const chartConfig = {
  usage: {
    label: "Usage",
  },
  tailwind: {
    label: "Tailwind",
    color: "hsl(var(--chart-3))",
  },
  bootstrap: {
    label: "Bootstrap",
    color: "hsl(var(--chart-2))",
  },
  bulma: {
    label: "Bulma",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function PieChartCard() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.usage, 0)
  }, [])

  return (
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
              dataKey="usage"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Git Stars
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
  )
}
