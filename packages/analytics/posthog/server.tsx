import 'server-only';
import { PostHog } from 'posthog-node';
import { keys } from '../keys';

export const analytics = new PostHog(keys().NEXT_PUBLIC_POSTHOG_KEY, {
    host: keys().NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
});