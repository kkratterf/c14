import type React from 'react';

import { CommandProvider } from '@/components/layouts/command-provider';
import SubscribeNavigation from '@/components/layouts/nav-subscribe';

export default function SubscribeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className='min-h-screen w-full bg-background'>
            <SubscribeNavigation />
            {children}
            <CommandProvider />
        </section>
    );
}