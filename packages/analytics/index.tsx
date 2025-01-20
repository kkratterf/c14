import type { ReactNode } from 'react';
import { GoogleAnalytics } from './google';
import { PostHogProvider } from './posthog/client';
import { VercelAnalytics } from './vercel';

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

export const AnalyticsProvider = ({
  children,
}: AnalyticsProviderProps) => (
  <PostHogProvider>
    {children}
    <VercelAnalytics />
    {process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_GA_ID && (
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    )}
  </PostHogProvider>
);
