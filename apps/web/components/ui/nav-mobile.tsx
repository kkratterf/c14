'use client';

import {
  SidebarTrigger,
  useSidebar,
} from '@c14/design-system/components/ui/sidebar';

const NavMobile = () => {
  const { isMobile } = useSidebar();
  return (
    <>
      {isMobile && <SidebarTrigger className="absolute top-6 right-6 z-50" />}
    </>
  );
};

export default NavMobile;
