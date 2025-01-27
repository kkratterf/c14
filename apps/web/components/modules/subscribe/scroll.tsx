import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';

import { getStartups } from '@/actions/startup';
import Marquee from '@/components/ui/marquee';
import type { Startup } from '@prisma/client';

interface StartupCardProps {
  item: Startup;
}

const StartupCard = ({ item: { name, logo } }: StartupCardProps) => {
  return (
    <Avatar key={name} className='size-20 rounded-xl border border-border'>
      <AvatarImage src={logo ?? undefined} />
      <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
};

const StartupsScroll = async () => {
  try {
    const { startups: scrollStartups } = await getStartups({
      isPopular: false,
    });

    if (!scrollStartups?.length) {
      return null;
    }

    return (
      <div className='absolute z-0 h-20 w-full'>
        <Marquee pauseOnHover className="[--duration:20s]">
          {scrollStartups.map((startup) => (
            <StartupCard key={startup.name} item={startup} />
          ))}
        </Marquee>
        <div className='absolute top-0 left-0 h-20 w-8 bg-gradient-to-l from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
        <div className='absolute top-0 right-0 h-20 w-8 bg-gradient-to-r from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100' />
      </div>
    );
  } catch {
    return null;
  }
};

export default StartupsScroll;
