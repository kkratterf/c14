import { StartupCardSkeleton } from '@/components/ui/startup-card';

export default function Loading() {
    return (
        <div className='flex h-full w-full flex-col gap-1 px-3 py-4'>
            {Array.from({ length: 10 }, (_, i) => (
                <StartupCardSkeleton key={i} />
            ))}
        </div>
    );
}