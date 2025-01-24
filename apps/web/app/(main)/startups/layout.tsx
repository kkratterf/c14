import type React from 'react';

import StartupsFilters from '@/components/modules/startups/filters';
import NavMobile from '@/components/ui/nav-mobile';

export default function StartupsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pt-6">
      <div className='flex items-center justify-between px-7'>
        <h1 className="font-brand text-3xl">Startups</h1>
        <NavMobile />
      </div>
      <StartupsFilters />
      {children}
    </div>
  );
}
