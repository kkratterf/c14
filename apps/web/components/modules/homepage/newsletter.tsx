import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { Button } from '@c14/design-system/components/ui/button';

import StartupsScroll from '@/components/modules/subscribe/scroll';

const Newsletter = () => {
    return (
        <div className='relative flex w-full flex-col items-center justify-center gap-8 py-6'>
            <div className="flex flex-col gap-3 px-8 text-center">
                <h2 className='font-brand text-heading-subsection'>
                    <Balancer>
                        Discover the best startups
                    </Balancer>
                </h2>
                <p className='text-base text-description'>
                    <Balancer>
                        Insights, benchmarks, and updates in your inbox.
                    </Balancer>
                </p>
            </div>
            <div className='relative flex h-20 w-full'>
                <StartupsScroll />
            </div>
            <Button asChild className='mt-4 w-fit'>
                <Link href="/subscribe">Subscribe for free</Link>
            </Button>
            <div className='absolute top-0 left-0 z-40 h-full w-8 bg-gradient-to-l from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
            <div className='absolute top-0 right-0 z-40 h-full w-8 bg-gradient-to-r from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
        </div>
    );
};

export default Newsletter;