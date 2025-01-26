import { Card } from '@c14/design-system/components/ui/card';

import {
  FirstChart,
  SecondChart,
  ThirdChart,
} from '@/components/modules/benchmark/charts';
import { NumberTicker } from '@/components/ui/number-ticker';
import { getStartupsByCategory, getStartupsByFundingStage, getStartupsByLocation, getStartupsByTeamSize, getStartupsCount } from '@/api/startup/serverActions';
import { getTagsCount } from '@/api/tag/serverActions';
import { getCountryCount } from '@/api/country/serverActions';
import { getCityCount } from '@/api/locations/serverActions';

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
      <Card className='rounded-xl border border-border bg-card shadow-sm'>
        <h2 className='font-brand text-xl'>Startups by industry</h2>
        <FirstChart
          data={startupsByCategory}
        />
      </Card>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <Card className='rounded-xl border border-border bg-card shadow-sm'>
          <h2 className='font-brand text-xl'>Startups by team size</h2>
          <FirstChart data={
            startupsByTeamSize

          } />
        </Card>
        <Card className='rounded-xl border border-border bg-card shadow-sm'>
          <h2 className='font-brand text-xl'>Startups by funding stage</h2>
          <FirstChart data={
            startupsByFundingStage

          } />
        </Card>
      </div>
      <Card className='rounded-xl border border-border bg-card shadow-sm'>
        <h2 className='font-brand text-xl'>Startups by city</h2>
        <FirstChart
          data={startupsByLocation}
        />
      </Card>
    </div>
  );
}
