import { analytics } from '@c14/analytics/posthog/server';
import { unstable_flag as flag } from '@vercel/flags/next';

export const createFlag = (key: string) =>
  flag({
    key,
    defaultValue: false,
    async decide() {
      const randomValue = Math.random();
      const rolloutPercentage = 0.2;
      return randomValue < rolloutPercentage;
    },
  });
