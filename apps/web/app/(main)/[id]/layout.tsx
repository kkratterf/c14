import type React from 'react';
import { Suspense } from 'react';

import Loading from './loading';

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;

}) {
    return (
        <Suspense fallback={<Loading className='h-[calc(100vh-8px)]' />}>
            {children}
        </Suspense>
    );
}
