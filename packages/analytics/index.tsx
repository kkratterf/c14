import type { ReactNode } from 'react';
import { GoogleAnalytics } from './google';
import { VercelAnalytics } from './vercel';

type AnalyticsProviderProps = {
  readonly children: ReactNode;
  readonly gaId?: string;
};

export const AnalyticsProvider = ({
  children,
  gaId,
}: AnalyticsProviderProps) => (
  <>
    {children}
    <VercelAnalytics />
    {process.env.NODE_ENV !== 'development' && gaId && (
      <GoogleAnalytics gaId={gaId} />
    )}
  </>
);
