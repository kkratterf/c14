import { getStartups, PAGE_SIZE } from '@/api/startup/serverActions';
import { parseSearchParams } from '@/app/utils';
import { StartupPagination } from '@/components/modules/startups/pagination';
import AdvertiseCard from '@/components/ui/advertise-card';
import StartupCard from '@/components/ui/startup-card';

interface IProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function StartupsPage(props: Promise<IProps>) {
  const { searchParams } = await props;
  const waited = await searchParams;
  const parsed = parseSearchParams(waited);
  const { name, page } = parsed;
  const { startups, count: total } = await getStartups({
    positionForFeatured: 5,
    name: Array.isArray(name) ? name[0] : name,
    page: parseInt(page, 10)
  });
  if (!startups) {
    //TODO: empty state page
    return <div>Startups not found</div>;
  }
  const pages = Math.ceil(total / PAGE_SIZE);
  return (
    <>
      <div className="flex flex-col gap-1 px-3 py-4 w-full h-full">
        {startups.map((startup) => startup.isFeatured ?

          <AdvertiseCard key={startup.id} item={startup} type="startups" /> :
          <StartupCard key={startup.id} item={startup} />
        )}
      </div>

      <StartupPagination
        currentPage={parseInt(page, 10)}
        searchParams={parsed}
        totalPages={pages}
        totalResults={total}
      />
    </>
  );
}
