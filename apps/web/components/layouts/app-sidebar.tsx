'use client';

import {
  ChartColumn,
  MessageCircle,
  PlusCircle,
  Rocket,
  Scroll,
} from 'lucide-react';
import type React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from '@c14/design-system/components/ui/sidebar';

import { MobileContent } from '@/components/layouts/mobile-content';
import { MobileTitle } from '@/components/layouts/mobile-title';
import { NavHeader } from '@/components/layouts/nav-header';
import { NavMain } from '@/components/layouts/nav-main';
import { NavSecondary } from '@/components/layouts/nav-secondary';
import { ModeToggle } from '@/components/ui/mode-toggle';

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
      title: 'Manifesto',
      url: '/manifesto',
      icon: Scroll,
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
    <Sidebar
      variant="inset" {...props}
      collapsible="icon" {...props}
      mobileTitle={<MobileTitle />}
      mobileContent={<MobileContent mainItems={data.navMain} secondaryItems={data.navSecondary} />}
    >
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
