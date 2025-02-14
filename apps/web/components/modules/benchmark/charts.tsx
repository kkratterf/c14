'use client';

import { useEffect, useState } from 'react';

import { BarChart } from '@c14/design-system/components/visualizations/bar-chart';
import { BarList } from '@c14/design-system/components/visualizations/bar-list';
import { DonutChart } from '@c14/design-system/components/visualizations/donut-chart';
import { useIsTablet } from '@c14/design-system/hooks/useTablet';
import type { AvailableChartColorsKeys } from '@c14/design-system/lib/chart';

interface IPropsChart {
  data: {
    id?: string;
    tagid?: string;
    name: string;
    startups: number;
  }[]
  layout?: 'vertical' | 'horizontal';
  className?: string;
  yAxisWidth?: number;
  colors?: AvailableChartColorsKeys[];
  showXAxis?: boolean;
  showYAxis?: boolean;
}

export const BenchmarkBarChart = ({ data, layout, className, yAxisWidth, colors, showXAxis, showYAxis }: IPropsChart) => {
  const isTablet = useIsTablet();
  const [itemsToShow, setItemsToShow] = useState(10);

  useEffect(() => {
    if (isTablet) {
      setItemsToShow(5);
    } else {
      setItemsToShow(9);
    }
  }, [isTablet]);

  const sortedData = [...data]
    .sort((a, b) => b.startups - a.startups)
    .slice(0, itemsToShow);

  return (
    <BarChart
      layout={layout}
      className={className}
      data={sortedData}
      index="name"
      colors={colors}
      categories={['startups']}
      showLegend={false}
      showXAxis={showXAxis}
      showYAxis={showYAxis}
      yAxisWidth={yAxisWidth}
      valueFormatter={(number: number) =>
        `${Intl.NumberFormat('us').format(number).toString()}`
      }
      onValueChange={(v) => console.log(v)}
    />
  );
};

export const BenchmarkBarList = ({ data }: IPropsChart) => {
  const formattedData = data.map(item => ({
    name: item.name,
    value: item.startups
  }));

  return (
    <BarList
      data={formattedData}
    />
  );
};


export const BenchmarkDonutChart = ({ data }: IPropsChart) => {
  const formattedData = data.map(item => ({
    name: item.name,
    value: item.startups
  }));

  return (
    <DonutChart
      data={formattedData}
      category="name"
      value="value"
      colors={['teal', 'blue', 'violet', 'fuchsia', 'cyan']}
    />
  );
};