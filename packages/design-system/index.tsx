import { AnalyticsProvider } from '@c14/analytics';
import type { ThemeProviderProps } from 'next-themes';
import { ToastProvider } from './components/ui/toast';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './providers/theme';

export const DesignSystemProvider = ({
  children,
  ...properties
}: ThemeProviderProps) => (
  <ThemeProvider {...properties}>
    <AnalyticsProvider>
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      <ToastProvider />
    </AnalyticsProvider>
  </ThemeProvider>
);
