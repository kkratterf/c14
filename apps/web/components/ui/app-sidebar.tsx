'use client';

import { ChartBar, Rocket } from 'lucide-react';
import type React from 'react';

import { ModeToggle } from '@c14/design-system/components/mode-toggle';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from '@c14/design-system/components/ui/sidebar';

import { NavHeader } from '@/components/ui/nav-header';
import { NavMain } from '@/components/ui/nav-main';
import { NavSecondary } from '@/components/ui/nav-secondary';

const data = {
  navMain: [
    {
      title: 'Startups',
      url: '/startups',
      icon: Rocket,
      isActive: true,
    },
    {
      title: 'Benchmark',
      url: '/benchmark',
      icon: ChartBar,
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: Rocket,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Rocket,
    },
  ],
  teams: [
    {
      name: 'Acme Inc',
      logo: Rocket,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: Rocket,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Rocket,
      plan: 'Free',
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarTrigger />
        <ModeToggle />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
