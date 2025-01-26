'use client';

import posthogRaw, { type PostHog } from 'posthog-js';
import { PostHogProvider as PostHogProviderRaw } from 'posthog-js/react';
import type { ReactNode } from 'react';
import { keys } from '../keys';

export const analytics = posthogRaw.init(keys().NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: keys().NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: keys().NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
}) as PostHog;

type PostHogProviderProps = {
    readonly children: ReactNode;
};

export const PostHogProvider = (
    properties: Omit<PostHogProviderProps, 'client'>
) => <PostHogProviderRaw client={analytics} {...properties} />;