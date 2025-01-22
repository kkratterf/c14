import { Card } from '@c14/design-system/components/ui/card';

import {
  FirstChart,
  SecondChart,
  ThirdChart,
} from '@/components/modules/benchmark/charts';
import { NumberTicker } from '@/components/ui/number-ticker';

export default function BenchmarkPage() {
  return (
    <div className='flex h-full w-full flex-col gap-4 px-6 py-6'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Startups</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={982}
          />
        </Card>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Industries</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={42}
          />
        </Card>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Countries</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={3}
          />
        </Card>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Cities</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={72}
          />
        </Card>
      </div>
      <Card className='rounded-xl border border-border bg-card shadow-sm'>
        <h2 className='font-brand text-xl'>Startups by industry</h2>
        <FirstChart />
      </Card>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <Card className='rounded-xl border border-border bg-card shadow-sm'>
          <h2 className='font-brand text-xl'>Startups by team size</h2>
          <SecondChart />
        </Card>
        <Card className='rounded-xl border border-border bg-card shadow-sm'>
          <h2 className='font-brand text-xl'>Startups by funding stage</h2>
          <ThirdChart />
        </Card>
      </div>
      <Card className='rounded-xl border border-border bg-card shadow-sm'>
        <h2 className='font-brand text-xl'>Startups by city</h2>
        <FirstChart />
      </Card>
    </div>
  );
}
