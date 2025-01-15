'use client';

import Link from 'next/link';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@c14/design-system/components/ui/sidebar';
import { cn, focusRing } from '@c14/design-system/lib/utils';

import Pictogram from '@/components/ui/pictogram';

export function NavHeader() {
  const { isMobile, state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <>
      {!isMobile && (
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                'flex w-full items-center justify-between pt-4 pb-2 transition-all duration-200',
                isCollapsed ? 'px-[1px]' : 'px-2'
              )}
            >
              <Link
                href="/"
                className={cn('z-50 w-auto rounded-lg bg-subtle', focusRing)}
              >
                <Pictogram size={32} />
              </Link>
              <div
                className={cn(
                  'transition-all duration-200',
                  isCollapsed
                    ? 'invisible w-0 opacity-0'
                    : 'visible w-auto opacity-100'
                )}
              >
                <SidebarTrigger className={cn(isCollapsed ? 'hidden' : '')} />
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      )}
    </>
  );
}
