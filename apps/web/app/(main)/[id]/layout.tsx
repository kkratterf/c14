import type React from 'react';
import { Suspense } from 'react';

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;

}) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    );
}
