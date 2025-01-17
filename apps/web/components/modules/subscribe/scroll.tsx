import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';

import Marquee from '@/components/ui/marquee';
import { subscribeScroll } from '@/lib/subscribe-scroll';

interface StartupCardProps {
  item: {
    name: string;
    description: string;
    avatar_url: string;
    avatar_fallback: string;
    url: string;
  };
}

const StartupCard = ({
  item: { name, avatar_url, avatar_fallback },
}: StartupCardProps) => {
  return (
    <Avatar key={name} className="size-20 rounded-xl border border-border">
      <AvatarImage src={avatar_url} />
      <AvatarFallback>{avatar_fallback}</AvatarFallback>
    </Avatar>
  );
};

export function StartupsScroll() {
  return (
    <div className="absolute z-0 h-20 w-full">
      <Marquee pauseOnHover className="[--duration:20s]">
        {subscribeScroll.map((startup) => (
          <StartupCard key={startup.name} item={startup} />
        ))}
      </Marquee>
      <div className="absolute top-0 left-0 h-20 w-8 bg-gradient-to-l from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100" />
      <div className="absolute top-0 right-0 h-20 w-8 bg-gradient-to-r from-white/0 to-white/100 dark:from-[#1B1D21]/0 dark:to-[#1B1D21]/100" />
    </div>
  );
}
