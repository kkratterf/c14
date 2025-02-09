'use client';

import {
  SidebarTrigger,
  useSidebar,
} from '@c14/design-system/components/ui/sidebar';

interface NavMobileProps {
  className?: string;
}

const NavMobile = ({ className }: NavMobileProps) => {
  const { isMobile } = useSidebar();
  return (
    <>
      {isMobile && <SidebarTrigger className={className} />}
    </>
  );
};

export default NavMobile;
