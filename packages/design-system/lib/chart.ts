export type ColorUtility = "bg" | "stroke" | "fill" | "text"

export const chartColors = {
  brand: {
    bg: "bg-chart-brand",
    stroke: "stroke-icon-chart-brand",
    fill: "fill-icon-chart-brand",
    text: "text-chart-brand",
  },
  red: {
    bg: "bg-chart-red",
    stroke: "stroke-icon-chart-red",
    fill: "fill-icon-chart-red",
    text: "text-chart-red",
  },
  amber: {
    bg: "bg-chart-amber",
    stroke: "stroke-icon-chart-amber",
    fill: "fill-icon-chart-amber",
    text: "text-chart-amber",
  },
  emerald: {
    bg: "bg-chart-emerald",
    stroke: "stroke-icon-chart-emerald",
    fill: "fill-icon-chart-emerald",
    text: "text-chart-emerald",
  },
  teal: {
    bg: "bg-chart-teal",
    stroke: "stroke-icon-chart-teal",
    fill: "fill-icon-chart-teal",
    text: "text-chart-teal",
  },
  cyan: {
    bg: "bg-chart-cyan",
    stroke: "stroke-icon-chart-cyan",
    fill: "fill-icon-chart-cyan",
    text: "text-chart-cyan",
  },
  blue: {
    bg: "bg-chart-blue",
    stroke: "stroke-icon-chart-blue",
    fill: "fill-icon-chart-blue",
    text: "text-chart-blue",
  },
  violet: {
    bg: "bg-chart-violet",
    stroke: "stroke-icon-chart-violet",
    fill: "fill-icon-chart-violet",
    text: "text-chart-violet",
  },
  pink: {
    bg: "bg-chart-pink",
    stroke: "stroke-icon-chart-pink",
    fill: "fill-icon-chart-pink",
    text: "text-chart-pink",
  },
} as const satisfies {
  [color: string]: {
    [key in ColorUtility]: string;
  };
};

export type AvailableChartColorsKeys = keyof typeof chartColors

export const AvailableChartColors: AvailableChartColorsKeys[] = Object.keys(
  chartColors,
) as Array<AvailableChartColorsKeys>

export const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColorsKeys[],
): Map<string, AvailableChartColorsKeys> => {
  const categoryColors = new Map<string, AvailableChartColorsKeys>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

export const getColorClassName = (
  color: AvailableChartColorsKeys,
  type: ColorUtility,
): string => {
  const fallbackColor = {
    bg: "bg-chart-neutral",
    stroke: "stroke-icon-chart-neutral",
    fill: "fill-icon-chart-neutral",
    text: "text-chart-neutral",
  };
  return chartColors[color]?.[type] ?? fallbackColor[type]
}
