import type React from 'react';
import type { ReactNode } from 'react';

import { DesignSystemProvider } from '@c14/design-system';
import { fonts } from '@c14/design-system/lib/fonts';

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <DesignSystemProvider>
      <main className={fonts}>{children}</main>
    </DesignSystemProvider>
  );
};

export default Main;
