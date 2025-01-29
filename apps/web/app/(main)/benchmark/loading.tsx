import { Skeleton } from '@c14/design-system/components/ui/skeleton';

export default function Loading() {
    return (
        <div className='flex h-full w-full animate-in flex-col gap-4 px-6 py-6'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {Array.from({ length: 4 }, (_, i) => (
                    <Skeleton key={i} className='h-[110px] rounded-xl' />
                ))}
            </div>
            <div className='flex flex-col gap-4'>
                {Array.from({ length: 4 }, (_, i) => (
                    <Skeleton key={i} className='h-[392px] rounded-xl' />
                ))}
            </div>
        </div>
    );
}