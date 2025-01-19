import { getStartups } from '@/api/startup/serverActions';
import AdvertiseCard from '@/components/ui/advertise-card';
import PopularCard from '@/components/ui/popular-card';

const Popular = async () => {
  const { startups: popularStartups } = await getStartups({
    isPopular: true,
    positionForFeatured: 3
  });
  return (
    <section className="flex flex-col gap-4">
      <h2 className="px-4 font-base font-brand text-heading-section">
        Popular startups
      </h2>
      <div className="flex flex-col gap-1">
        {popularStartups.map((item) => item.isFeatured ?
          <AdvertiseCard key={item.id} item={item} type="popular" />
          :
          <PopularCard key={item.id} item={item} />
        )}
      </div>
    </section>
  );
};

export default Popular;
