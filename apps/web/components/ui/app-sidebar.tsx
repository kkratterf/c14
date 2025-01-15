'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from '@c14/design-system/components/ui/sidebar';
import {
  ChartBar,
  Coins,
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
      icon: ChartBar,
    },
  ],
  navSecondary: [
    {
      title: 'Submit',
      url: '/',
      icon: PlusCircle,
    },
    {
      title: 'Advertise',
      url: '/advertise',
      icon: Coins,
    },
    {
      title: 'About',
      url: '/about',
      icon: Info,
    },
    {
      title: 'Feedback',
      url: '/',
      icon: MessageCircle,
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
