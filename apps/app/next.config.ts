import { env } from '@c14/env';
import { config, withAnalyzer, withSentry } from '@c14/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = { ...config };

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
