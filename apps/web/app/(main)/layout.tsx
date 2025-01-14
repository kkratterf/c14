import { cookies } from 'next/headers';
import type React from 'react';

import { AppSidebar } from '@/components/ui/app-sidebar';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@c14/design-system/components/ui/sidebar';

export default async function MainLayout({
  children,
}: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="mt-2 w-full rounded-tl-3xl border border-t border-l bg-background px-6 py-10 shadow-sm">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
