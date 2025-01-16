import Link from 'next/link';

import { Button } from '@c14/design-system/components/ui/button';

const Submit = () => {
  return (
    <div className="relative flex flex-col">
      <div className="relative flex h-6 flex-row border-border border-b">
        <div className="absolute top-0 left-0 h-6 w-full bg-gradient-to-t from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100" />
        <div className="w-4 border-border border-r" />
        <div className="w-full" />
        <div className="w-4 border-border border-l" />
      </div>
      <div className="flex w-full flex-row">
        <div className="absolute top-0 left-0 z-40 h-full w-4 bg-gradient-to-l from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100" />
        <div className="h-full w-[15px]" />
        <div className="flex w-full flex-col gap-6 border-border border-x p-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-brand text-heading-section">
              Submit your startup
            </h2>
            <p className="text-base text-description">
              Help us grow our open-source list of startups.
            </p>
          </div>
          <Button className="w-fit">
            <Link target="_blank" href="https://tally.so/r/3lKZEW">
              Submit
            </Link>
          </Button>
        </div>
        <div className="h-full w-[15px]" />
        <div className="absolute top-0 right-0 z-40 h-full w-4 bg-gradient-to-r from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100" />
      </div>
      <div className="relative flex h-6 flex-row border-border border-t">
        <div className="absolute bottom-0 left-0 h-6 w-full bg-gradient-to-b from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100" />
        <div className="w-4 border-border border-r" />
        <div className="w-full" />
        <div className="w-4 border-border border-l" />
      </div>
    </div>
  );
};

export default Submit;
