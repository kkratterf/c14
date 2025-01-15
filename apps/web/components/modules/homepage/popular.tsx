import PopularCard from '@/components/ui/popular-card';

const items = [
  {
    name: 'Startup 1',
    description: 'Description 1',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S1',
    url: '/startups/1',
  },
  {
    name: 'Startup 2',
    description: 'Description 2',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S2',
    url: '/startups/2',
  },
  {
    name: 'Startup 3',
    description: 'Description 3',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S3',
    url: '/startups/3',
  },
  {
    name: 'Startup 4',
    description: 'Description 4',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S4',
    url: '/startups/4',
  },
  {
    name: 'Startup 5',
    description: 'Description 5',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S5',
    url: '/startups/5',
  },
  {
    name: 'Startup 6',
    description: 'Description 6',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S6',
    url: '/startups/6',
  },
  {
    name: 'Startup 7',
    description: 'Description 7',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S7',
    url: '/startups/7',
  },
  {
    name: 'Startup 8',
    description: 'Description 8',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'S8',
    url: '/startups/8',
  },
];

const Popular = () => {
  const sponsoredItem = {
    name: 'Sponsorizzato',
    description: 'Scopri di più sui nostri servizi premium',
    avatar_url: '/ads/premium.png',
    avatar_fallback: 'AD',
    url: '/premium',
  };

  return (
    <section className="flex flex-col gap-4">
      <h2 className="px-4 font-base font-brand text-heading-section">
        Popular startups
      </h2>
      <div className="flex flex-col gap-1">
        {items.slice(0, 2).map((item) => (
          <PopularCard key={item.name} item={item} />
        ))}
        <PopularCard key={sponsoredItem.name} item={sponsoredItem} />
        {items.slice(2).map((item) => (
          <PopularCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
