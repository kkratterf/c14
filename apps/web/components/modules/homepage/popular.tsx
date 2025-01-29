import { Suspense } from 'react';

import { getStartups } from '@/actions/startup';
import Loading from '@/components/modules/homepage/loading';
import { PopularCard, } from '@/components/ui/popular-card';

const PopularStartups = async () => {
  const { startups: popularStartups } = await getStartups({
    isPopular: true,
  });

  return (
    <div className="flex flex-col gap-1">
      {popularStartups.map((item) => (
        <PopularCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const Popular = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="px-4 font-base font-brand text-heading-section">
        Popular startups
      </h2>
      <Suspense fallback={<Loading />}>
        <PopularStartups />
      </Suspense>
    </section>
  );
};

export default Popular;
