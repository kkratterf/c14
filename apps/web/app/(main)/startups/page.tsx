import { PAGE_SIZE, getStartups } from '@/api/startup/serverActions';
import { parseSearchParams } from '@/lib/utils';
import { StartupPagination } from '@/components/modules/startups/pagination';
import StartupCard from '@/components/ui/startup-card';

interface IProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page(props: IProps) {
  const { searchParams } = props;
  const waited = await searchParams;
  const parsed = parseSearchParams(waited);
  const { name, page } = parsed;
  const { startups, count: total } = await getStartups({
    positionForFeatured: 5,
    name: Array.isArray(name) ? name[0] : name,
    page: Number.parseInt(page, 10)
  });
  if (!startups) {
    //TODO: empty state page
    return <div>Startups not found</div>;
  }
  const pages = Math.ceil(total / PAGE_SIZE);
  return (
    <>
      <div className='flex flex-col gap-1 px-3 py-4 w-full h-full'>
        {startups.map((startup) => (
          <StartupCard key={startup.id} item={startup} />
        ))}
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