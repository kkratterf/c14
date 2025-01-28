import { getCountryCount } from '@/actions/country';
import { getCityCount } from '@/actions/locations';
import { getStartupsByCategory, getStartupsByFundingStage, getStartupsByLocation, getStartupsByTeamSize, getStartupsCount } from '@/actions/startup';
import { getTagsCount } from '@/actions/tag';

import { BenchmarkBarChart } from '@/components/modules/benchmark/charts';
import { DialogBenchmark } from '@/components/modules/benchmark/dialog';
import { BenchmarkLargeCard, BenchmarkSmallCard } from '@/components/ui/benchmark-cards';

export default async function BenchmarkPage() {

  const [nOfStratups, nOfCategogies, nOfCountries, nOfCities] = await Promise.all([getStartupsCount(), getTagsCount(), getCountryCount(), getCityCount()]);

  const [startupsByCategory, startupsByTeamSize, startupsByFundingStage, startupsByLocation] = await Promise.all([getStartupsByCategory(), getStartupsByTeamSize(), getStartupsByFundingStage(), getStartupsByLocation()]);

  return (
    <div className='flex h-full w-full flex-col gap-4 px-6 py-6'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <BenchmarkSmallCard title='Startups' value={nOfStratups} />
        <BenchmarkSmallCard title='Industries' value={nOfCategogies} />
        <BenchmarkSmallCard title='Countries' value={nOfCountries} />
        <BenchmarkSmallCard title='Cities' value={nOfCities} />
      </div>
      <BenchmarkLargeCard
        title='Startups by team size'
        customHeader={true}
        header={
          <div className='flex items-center justify-between px-5 py-4'>
            <h2 className='w-full font-brand text-xl'>Startups by industry</h2>
            <DialogBenchmark items={startupsByCategory} />
          </div>
        }
      >
        <BenchmarkBarChart
          className='p-6'
          showYAxis={false}
          colors={['violet']}
          layout='horizontal'
          data={startupsByCategory}
        />
      </BenchmarkLargeCard>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <BenchmarkLargeCard
          title='Startups by team size'
        >
          <BenchmarkBarChart
            colors={['blue']}
            yAxisWidth={80}
            showXAxis={false}
            className='p-6'
            layout='vertical'
            data={startupsByTeamSize}
          />
        </BenchmarkLargeCard>
        <BenchmarkLargeCard
          title='Startups by funding stage'
        >
          <BenchmarkBarChart
            yAxisWidth={80}
            showXAxis={false}
            colors={['teal']}
            className='p-6'
            layout='vertical'
            data={startupsByFundingStage}
          />
        </BenchmarkLargeCard>
      </div>
      <BenchmarkLargeCard
        title='Startups by city'
      >
        <BenchmarkBarChart
          className='p-6'
          colors={['amber']}
          showYAxis={false}
          data={startupsByLocation}
        />
      </BenchmarkLargeCard>
    </div>
  );
}
