import type React from 'react';
import { Suspense } from 'react';

import { getFundingStages } from '@/actions/fundingStage';
import { getLocations } from '@/actions/locations';
import { getTags } from '@/actions/tag';
import { getTeamSizes } from '@/actions/teamSize';

import NavMobile from '@/components/layouts/nav-mobile';
import StartupsFilters, { StartupFiltersSkeleton } from '@/components/modules/startups/filters';
import Loading from './loading';

const Filters = async () => {
  const [tags, fundingStages, teamSizes, locations] = await Promise.all([
    getTags(),
    getFundingStages(),
    getTeamSizes(),
    getLocations()
  ]);

  return (
    <StartupsFilters
      tags={tags ?? []}
      fundingStages={fundingStages ?? []}
      teamSizes={teamSizes ?? []}
      locations={locations ?? []}
    />
  );
};

export default function StartupsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pt-6">
      <div className='flex items-center justify-between px-7'>
        <h1 className="font-brand text-3xl">Startups</h1>
        <NavMobile />
      </div>
      <Suspense fallback={<StartupFiltersSkeleton />}>
        <Filters />
      </Suspense>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}
