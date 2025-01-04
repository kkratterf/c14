import { AnalyticsProvider } from '@c14/analytics';
import type { ThemeProviderProps } from 'next-themes';
import { ToastProvider } from './components/ui/toast';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './providers/theme';

type DesignSystemProviderProperties = ThemeProviderProps & {
  gaId?: string;
};

export const DesignSystemProvider = ({
  children,
  gaId,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    <AnalyticsProvider gaId={gaId}>
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      <ToastProvider />
    </AnalyticsProvider>
  </ThemeProvider>
);
