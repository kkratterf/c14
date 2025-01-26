import type React from 'react';

import SubscribeNavigation from '@/components/modules/subscribe/navigation';
import { CommandProvider } from '@/components/ui/command-provider';

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='min-h-screen w-full bg-background'>
      <SubscribeNavigation />
      {children}
      <CommandProvider />
    </section>
  );
}
