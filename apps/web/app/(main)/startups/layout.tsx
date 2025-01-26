import type React from 'react';

import StartupsFilters from '@/components/modules/startups/filters';
import NavMobile from '@/components/ui/nav-mobile';
import { getTags } from '@/api/tag/serverActions';
import { getFundingStages } from '@/api/fundingStage/serverActions';
import { getTeamSizes } from '@/api/teamSize/serverActions';
import { getLocations } from '@/api/locations/serverActions';

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
