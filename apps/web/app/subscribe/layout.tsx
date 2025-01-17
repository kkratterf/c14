import type React from 'react';

import SubscribeNavigation from '@/components/modules/subscribe/navigation';

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-background">
      <SubscribeNavigation />
      {children}
    </section>
  );
}
