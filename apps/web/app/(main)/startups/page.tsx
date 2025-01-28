import { PAGE_SIZE, getStartups } from '@/actions/startup';

import { StartupPagination } from '@/components/modules/startups/pagination';
import Empty from '@/components/ui/empty';
import StartupCard from '@/components/ui/startup-card';
import { parseSearchParams } from '@/lib/utils';

interface IProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page(props: IProps) {
  const { searchParams } = props;
  const waited = await searchParams;
  const parsed = parseSearchParams(waited);
  const { name, page, categories, fundingStage, location, teamSize } = parsed;
  const { startups, count: total } = await getStartups({
    positionForFeatured: 5,
    name: Array.isArray(name) ? name[0] : name,
    page: Number.parseInt(page, 10),
    tags: categories?.split(','),
    fundingStages: fundingStage?.split(','),
    locations: location?.split(','),
    teamSizes: teamSize?.split(','),
  });
  if (!startups) {
    return <Empty description='Something went wrong. But hey, don’t give up! Try again later.' />;
  }
  const pages = Math.ceil(total / PAGE_SIZE);
  return (
    <>
      <div className='flex h-full w-full flex-col gap-1 px-3 py-4'>
        {startups.length === 0 ? (
          <Empty description='Don’t give up! Try tweaking the filters and see what comes up.' />
        ) : (
          startups.map((startup) => (
            <StartupCard key={startup.id} item={startup} />
          ))
        )}
      </div>
      {/* TODO: Add the advertise block here
      <div className='flex flex-col gap-1 px-3 py-4 w-full h-full'>
        {startups.map((startup) => startup.isFeatured ?

          <AdvertiseCard key={startup.id} item={startup} type="startups" /> :
          <StartupCard key={startup.id} item={startup} />
        )}
      </div>
      */}
      <StartupPagination
        currentPage={Number.parseInt(page, 10)}
        searchParams={parsed}
        totalPages={pages}
        totalResults={total}
      />
    </>
  );
}