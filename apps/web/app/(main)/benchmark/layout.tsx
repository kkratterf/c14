import type React from 'react';

import NavMobile from '@/components/layouts/nav-mobile';

export default function BenchmarkLayout({
  children,
}: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col pt-6">
      <div className='flex items-center justify-between border-border border-b px-7 pb-6'>
        <h1 className="font-brand text-3xl">Benchmark</h1>
        <NavMobile />
      </div>
      {children}
    </div>
  );
}
