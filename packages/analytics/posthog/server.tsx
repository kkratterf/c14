import 'server-only';
import { PostHog } from 'posthog-node';

if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !process.env.NEXT_PUBLIC_POSTHOG_HOST) {
    throw new Error('Missing PostHog configuration');
}

export const analytics = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,

    // Don't batch events and flush immediately - we're running in a serverless environment
    flushAt: 1,
    flushInterval: 0,
});