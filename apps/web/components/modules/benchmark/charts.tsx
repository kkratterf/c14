'use client';

import { chartdata } from '@/lib/data/chart';
import { BarChart } from '@c14/design-system/components/visualizations/bar-chart';

interface IPropsChart {
  data: {
    name: string;
    startups: number;
  }[]
}

export const FirstChart = ({ data }: IPropsChart) => {
  return (
    <BarChart
      className="h-80"
      data={data}
      index="name"
      categories={['startups']}
      valueFormatter={(number: number) =>
        `${Intl.NumberFormat('us').format(number).toString()}`
      }
      onValueChange={(v) => console.log(v)}
    />
  );
};

export const SecondChart = () => {
  return (
    <BarChart
      className="h-80"
      data={chartdata}
      index="date"
      categories={['SolarPanels', 'Inverters']}
      valueFormatter={(number: number) =>
        `$${Intl.NumberFormat('us').format(number).toString()}`
      }
      onValueChange={(v) => console.log(v)}
    />
  );
};

export const ThirdChart = () => {
  return (
    <BarChart
      className="h-80"
      data={chartdata}
      index="date"
      categories={['SolarPanels', 'Inverters']}
      valueFormatter={(number: number) =>
        `$${Intl.NumberFormat('us').format(number).toString()}`
      }
      onValueChange={(v) => console.log(v)}
    />
  );
};