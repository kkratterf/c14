import AdvertiseCard from '@/components/ui/advertise-card';
import PopularCard from '@/components/ui/popular-card';

import { advertise } from '@/lib/advertise';
import { popular } from '@/lib/popular';

const Popular = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="px-4 font-base font-brand text-heading-section">
        Popular startups
      </h2>
      <div className="flex flex-col gap-1">
        {popular.slice(0, 2).map((item) => (
          <PopularCard key={item.name} item={item} />
        ))}
        <AdvertiseCard item={advertise} type="popular" />
        {popular.slice(2).map((item) => (
          <PopularCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
