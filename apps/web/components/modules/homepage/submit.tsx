import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { Button } from '@c14/design-system/components/ui/button';

const Submit = () => {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className='relative z-30 flex h-6 flex-row border-border border-b bg-background'>
        <div className='absolute top-0 left-0 h-6 w-full bg-gradient-to-t from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
        <div className='w-4 border-border border-r' />
        <div className="w-full" />
        <div className='w-4 border-border border-l' />
      </div>
      <div className='z-30 flex w-full flex-row'>
        <div className='absolute top-0 left-0 z-40 h-full w-4 bg-gradient-to-l from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
        <div className='h-full w-[15px]' />
        <div className='flex w-full flex-col gap-6 border-border border-x p-6'>
          <div className="flex flex-col gap-4">
            <h2 className="font-brand text-heading-subsection">
              <Balancer>
                Know a startup that should be here?
              </Balancer>
            </h2>
            <p className='text-base text-description'>
              <Balancer>
                Your suggestions help us grow a transparent and open database.
              </Balancer>
            </p>
          </div>
          <Button className="w-fit">
            <Link target="_blank" href="https://tally.so/r/3lKZEW">
              Help us grow
            </Link>
          </Button>
        </div>
        <div className='w-[15px]' />
        <div className='absolute top-0 right-0 z-40 h-full w-4 bg-gradient-to-r from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
      </div>
      <div className='relative z-30 flex h-6 flex-row border-border border-t bg-background'>
        <div className='absolute bottom-0 left-0 h-6 w-full bg-gradient-to-b from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
        <div className='w-4 border-border border-r' />
        <div className='w-full' />
        <div className='w-4 border-border border-l' />
      </div>
      <div className='absolute right-6 bottom-0 z-20'>
        <svg
          width="316"
          height="248"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Decorative corner element"
          className="stroke-border"
        >
          <title>Decorative corner element</title>
          <path d="M27.4286 9.30863L24.88 3.92577C24.5943 3.30863 24.1028 2.79434 23.44 2.4172C22.9257 2.12006 22.32 1.91435 21.6571 1.81149L12.3314 0.337202C12.0114 0.291488 11.68 0.257202 11.3714 0.257202C11.0743 0.257202 10.7771 0.280059 10.48 0.325774C9.83999 0.417202 9.23427 0.622917 8.70856 0.931488L1.99999 4.80577C1.31427 5.20577 0.822843 5.72006 0.548558 6.3372C0.354272 6.77149 0.274272 7.22863 0.297129 7.68577V11.4229C0.297129 11.8572 0.388558 12.2686 0.571415 12.6686L3.11999 18.0629C3.4057 18.6801 3.89713 19.1943 4.55999 19.5715C5.06284 19.8686 5.66856 20.0629 6.34284 20.1772L15.68 21.6515C16 21.6972 16.3314 21.7315 16.64 21.7315C16.9371 21.7315 17.2343 21.7086 17.5314 21.6629C18.1828 21.5715 18.7771 21.3658 19.3143 21.0572L26.0114 17.1943C26.6971 16.7943 27.1886 16.2801 27.4743 15.6515C27.6343 15.2858 27.7257 14.8858 27.7257 14.4972V10.5772C27.7257 10.1429 27.6343 9.73149 27.44 9.33149L27.4286 9.30863Z" stroke="var(--color-border-default)" strokeWidth="0.1" />
          <path d="M22.4343 4.16574C22.1371 3.99432 21.7714 3.8686 21.3486 3.81146L12.0114 2.33717C11.7943 2.30289 11.5771 2.28003 11.36 2.28003C11.1657 2.28003 10.9714 2.29146 10.7771 2.32574C10.3771 2.38289 10.0229 2.5086 9.71428 2.68003L3.00571 6.55431C2.69714 6.73717 2.49142 6.94289 2.38857 7.17146C2.33142 7.3086 2.29714 7.45717 2.32 7.59432C2.33142 7.68574 2.36571 7.7886 2.4 7.88003L3.48571 10.1886L4.93714 13.2743C5.05142 13.5143 5.25714 13.7315 5.55428 13.9029C5.85142 14.0743 6.21714 14.1886 6.64 14.2572L9.30285 14.68L11.9657 15.1029L15.9657 15.7315C16.1829 15.7657 16.4 15.7886 16.6171 15.7886C16.8114 15.7886 17.0057 15.7772 17.2 15.7429C17.6 15.6857 17.9543 15.56 18.2629 15.3886L19.6914 14.5657L21.6229 13.4457L22.8571 12.7257L24.48 11.7886L24.9714 11.5029C25.28 11.32 25.4857 11.1257 25.5886 10.8857C25.6343 10.7715 25.6686 10.6686 25.6686 10.5543C25.6686 10.4286 25.6343 10.3029 25.5771 10.1772L23.0286 4.78289C22.9143 4.54289 22.7086 4.32574 22.4114 4.15432L22.4343 4.16574Z" stroke="var(--color-border-default)" strokeWidth="0.1" />
        </svg>
      </div>
    </div>
  );
};

export default Submit;
