"use client"

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "tailwind", visitors: 200, fill: "var(--color-chart-3)" },
  { browser: "bootstrap", visitors: 270, fill: "var(--color-chart-2)" },
  { browser: "bulma", visitors: 100, fill: "var(--color-chart-1)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  bulma: {
    label: "Bulma",
    color: "hsl(var(--chart-1))",
  },
  bootstrap: {
    label: "Bootstrap",
    color: "hsl(var(--chart-2))",
  },
  tailwind: {
    label: "Tailwind",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function ChartBar() {
  return (
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
  )
}
