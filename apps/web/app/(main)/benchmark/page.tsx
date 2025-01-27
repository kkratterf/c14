import { Card } from '@c14/design-system/components/ui/card';

import { getCountryCount } from '@/actions/country';
import { getCityCount } from '@/actions/locations';
import { getStartupsByCategory, getStartupsByFundingStage, getStartupsByLocation, getStartupsByTeamSize, getStartupsCount } from '@/actions/startup';
import { getTagsCount } from '@/actions/tag';
import { BenchmarkBarChart, } from '@/components/modules/benchmark/charts';
import DialogBenchmark from '@/components/modules/benchmark/dialog';
import { NumberTicker } from '@/components/ui/number-ticker';
import { Separator } from '@c14/design-system/components/ui/separator';

export default async function BenchmarkPage() {

  const [nOfStratups, nOfCategogies, nOfCountries, nOfCities] = await Promise.all([getStartupsCount(), getTagsCount(), getCountryCount(), getCityCount()]);

  const [startupsByCategory, startupsByTeamSize, startupsByFundingStage, startupsByLocation] = await Promise.all([getStartupsByCategory(), getStartupsByTeamSize(), getStartupsByFundingStage(), getStartupsByLocation()]);

  return (
    <div className='flex h-full w-full flex-col gap-4 px-6 py-6'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Startups</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={nOfStratups}
          />
        </Card>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Industries</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={nOfCategogies}
          />
        </Card>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Countries</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={nOfCountries}
          />
        </Card>
        <Card className='flex flex-col gap-1'>
          <p className='font-mono text-description text-sm'>Cities</p>
          <NumberTicker
            className=
            'font-brand text-3xl'
            value={nOfCities}
          />
        </Card>
      </div>
      <Card className='flex flex-col rounded-xl border border-border bg-card p-0 shadow-sm'>
        <div className='flex items-center justify-between px-5 py-4'>
          <h2 className='w-full font-brand text-xl'>Startups by industry</h2>
          <DialogBenchmark items={startupsByCategory} />
        </div>
        <Separator />
        <BenchmarkBarChart className='p-6' showYAxis={false} colors={['violet']} layout='horizontal'
          data={startupsByCategory}
        />
      </Card>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <Card className='flex flex-col rounded-xl border border-border bg-card p-0 shadow-sm'>
          <h2 className='px-5 py-4 font-brand text-xl'>Startups by team size</h2>
          <Separator />
          <BenchmarkBarChart colors={['blue']} yAxisWidth={80} showXAxis={false} className='p-6' layout='vertical' data={
            startupsByTeamSize
          } />
        </Card>
        <Card className='flex flex-col rounded-xl border border-border bg-card p-0 shadow-sm'>
          <h2 className='px-5 py-4 font-brand text-xl'>Startups by funding stage</h2>
          <Separator />
          <BenchmarkBarChart yAxisWidth={80} showXAxis={false} colors={['teal']} className='p-6' layout='vertical' data={
            startupsByFundingStage

          } />
        </Card>
      </div>
      <Card className='flex flex-col rounded-xl border border-border bg-card p-0 shadow-sm'>
        <h2 className='px-5 py-4 font-brand text-xl'>Startups by city</h2>
        <Separator />
        <BenchmarkBarChart
          className='p-6'
          colors={['amber']}
          showYAxis={false}
          data={startupsByLocation}
        />
      </Card>
    </div>
  );
}
