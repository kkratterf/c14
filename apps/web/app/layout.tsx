import '@c14/design-system/styles/shared-globals.css';
import { DesignSystemProvider } from '@c14/design-system';
import { fonts } from '@c14/design-system/lib/fonts';
import type { ReactNode } from 'react';

export { metadata } from '@/lib/metadata';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <DesignSystemProvider>{children}</DesignSystemProvider>
    </body>
  </html>
);

export default RootLayout;
