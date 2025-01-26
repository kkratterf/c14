import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { cn, focusRing } from '@c14/design-system/lib/utils';

import SubscribeForm from '@/components/modules/subscribe/form';
import StartupsScroll from '@/components/modules/subscribe/scroll';
import Pictogram from '@/components/ui/pictogram';

export default function SubscribePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 pt-10 pb-24'>
      <Link href="/" className={cn('rounded-lg', focusRing)}>
        <Pictogram size={48} />
      </Link>
      <div className='relative flex w-full items-center justify-center'>
        <StartupsScroll />
        <div className='relative m-6 flex min-h-96 max-w-screen-md flex-col rounded-3xl border border-border bg-subtle shadow-sm md:flex-row'>
          <div className='flex w-full flex-col gap-10 border-border border-b px-6 py-8 sm:px-8 sm:py-10 md:justify-between md:border-r md:border-b-0'>
            <div className="flex flex-col gap-4">
              <h1 className="font-brand text-xl sm:text-2xl">
                Discover the best startups
              </h1>
              <p className="text-description text-sm sm:text-base">
                Keep up with the latest in Startups, get a curated digest of top
                resources and insights delivered to your inbox
              </p>
            </div>
            <p className="font-mono text-description text-xs sm:text-sm">
              No spam, just one email every two weeks
            </p>
          </div>
          <SubscribeForm />
        </div>
      </div>
      <Balancer className='max-w-screen-sm px-6 text-center text-description text-xs leading-5'>
        By subscribing you agree to our privacy policy & cookie policy and to
        receive marketing and account-related emails from C14. You can
        unsubscribe at any time.
      </Balancer>
    </div>
  );
}
