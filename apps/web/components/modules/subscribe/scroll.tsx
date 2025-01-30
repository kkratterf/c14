

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';

import Marquee from '@/components/ui/marquee';
import { startups } from '@/lib/data/subscribe';
import type { SubscribeStartup } from '@/lib/data/subscribe';

interface StartupCardProps {
  item: SubscribeStartup;
}

const StartupCard = ({ item: { name, logo } }: StartupCardProps) => {
  return (
    <Avatar key={name} className='size-20 rounded-xl border border-border'>
      <AvatarImage src={logo ?? undefined} />
      <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
};

const StartupsList = () => {
  return (
    <Marquee pauseOnHover className="[--duration:20s]">
      {startups?.map((startup) => (
        <StartupCard key={startup.name} item={startup} />
      ))}
    </Marquee>
  );
};

const StartupsScroll = () => {
  return (
    <div className='absolute z-0 h-20 w-full'>
      <StartupsList />
      <div className='absolute top-0 left-0 h-20 w-8 bg-gradient-to-l from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
      <div className='absolute top-0 right-0 h-20 w-8 bg-gradient-to-r from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
    </div>
  );
};

export default StartupsScroll;
