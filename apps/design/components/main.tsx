import type React from 'react';
import type { ReactNode } from 'react';

import { ToastProvider } from '@c14/design-system/components/ui/toast';
import { TooltipProvider } from '@c14/design-system/components/ui/tooltip';
import { fonts } from '@c14/design-system/lib/fonts';
import { ThemeProvider } from '@c14/design-system/providers/theme';

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children, ...properties }) => {
  return (
    <ThemeProvider {...properties}>
      <TooltipProvider delayDuration={200}>
        <main className={fonts}>{children}</main>
      </TooltipProvider>
      <ToastProvider />
    </ThemeProvider>
  );
};

export default Main;
