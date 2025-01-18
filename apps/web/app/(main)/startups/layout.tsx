import type React from 'react';

import StartupsFilters from '@/components/modules/startups/filters';

export default function StartupsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pt-6">
      <h1 className="px-7 font-brand text-3xl">Startups</h1>
      <StartupsFilters />
      {children}
    </div>
  );
}
