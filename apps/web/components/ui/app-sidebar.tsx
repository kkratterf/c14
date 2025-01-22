'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from '@c14/design-system/components/ui/sidebar';
import {
  ChartColumn,
  Info,
  MessageCircle,
  PlusCircle,
  Rocket,
} from 'lucide-react';
import type React from 'react';

import { ModeToggle } from '@/components/ui/mode-toggle';
import { NavHeader } from '@/components/ui/nav-header';
import { NavMain } from '@/components/ui/nav-main';
import { NavSecondary } from '@/components/ui/nav-secondary';

const data = {
  navMain: [
    {
      title: 'Startups',
      url: '/startups',
      icon: Rocket,
    },
    {
      title: 'Benchmark',
      url: '/benchmark',
      icon: ChartColumn,
    },
  ],
  navSecondary: [
    {
      title: 'Submit',
      url: 'https://tally.so/r/3lKZEW',
      icon: PlusCircle,
      isExternal: true,
    },
    {
      title: 'About',
      url: '/about',
      icon: Info,
    },
    {
      title: 'Feedback',
      url: 'https://tally.so/r/mOdyN8',
      icon: MessageCircle,
      isExternal: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
