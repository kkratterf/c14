'use client';

import { ChevronsUpDown, Monitor, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@c14/design-system/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@c14/design-system/components/ui/sidebar';
import { cn } from '@c14/design-system/lib/utils';

const themes = [
  { label: 'Light', value: 'light', icon: SunIcon },
  { label: 'Dark', value: 'dark', icon: MoonIcon },
  { label: 'System', value: 'system', icon: Monitor },
];

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { isMobile, state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const currentTheme = React.useMemo(() => {
    return themes.find((t) => t.value === theme) ?? themes[2];
  }, [theme]);

  const Icon = currentTheme.icon;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="sm"
              className="rounded-lg data-[state=open]:bg-item-hover"
            >
              <Icon className="size-[1.2rem] transition-all duration-200" />
              <span
                className={cn(
                  'transition-all duration-200',
                  isCollapsed ? 'invisible opacity-0' : 'visible opacity-100'
                )}
              >
                {currentTheme.label}
              </span>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            {themes.map(({ label, value, icon: Icon }) => (
              <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
                <Icon className="mr-2 size-4" />
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
