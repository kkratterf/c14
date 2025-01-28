import type React from 'react';

import { getFundingStages } from '@/actions/fundingStage';
import { getLocations } from '@/actions/locations';
import { getTags } from '@/actions/tag';
import { getTeamSizes } from '@/actions/teamSize';

import NavMobile from '@/components/layouts/nav-mobile';
import StartupsFilters from '@/components/modules/startups/filters';

export default async function StartupsLayout({
  children,
}: { children: React.ReactNode }) {

  const tags = await getTags();
  const fundingStages = await getFundingStages();
  const teamSizes = await getTeamSizes();
  const locations = await getLocations();
  return (
    <div className="flex flex-col pt-6">
      <div className='flex items-center justify-between px-7'>
        <h1 className="font-brand text-3xl">Startups</h1>
        <NavMobile />
      </div>
      <StartupsFilters
        tags={tags ?? []}
        fundingStages={fundingStages ?? []}
        teamSizes={teamSizes ?? []}
        locations={locations ?? []}
      />
      {children}
    </div>
  );
}
