import type { ReactNode } from 'react';
import { PostHogProvider } from './posthog/client';

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

export const AnalyticsProvider = ({
  children,
}: AnalyticsProviderProps) => (
  <PostHogProvider>
    {children}
  </PostHogProvider>
);
