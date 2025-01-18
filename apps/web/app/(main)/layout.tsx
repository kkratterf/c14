import { SidebarProvider } from '@c14/design-system/components/ui/sidebar';
import { cookies } from 'next/headers';
import type React from 'react';

import { AppSidebar } from '@/components/ui/app-sidebar';
import { CommandProvider } from '@/components/ui/command-provider';
import NavMobile from '@/components/ui/nav-mobile';

export default async function MainLayout({
  children,
}: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="mt-2 h-[calc(100vh-8px)] w-full overflow-auto rounded-tl-3xl border border-t border-l bg-background shadow-sm">
        <NavMobile />
        {children}
      </main>
      <CommandProvider />
    </SidebarProvider>
  );
}
