import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { Button } from '@c14/design-system/components/ui/button';
import { cn } from '@c14/design-system/lib/utils';

interface AdvertiseCardProps {
  type: 'popular' | 'startups' | 'startup-page';
  item: {
    name: string;
    description: string;
    avatar_url: string;
    avatar_fallback: string;
    url: string;
    cta: string;
  };
}

const AdvertiseCard = ({ type, item }: AdvertiseCardProps) => {
  const styles = {
    popular: 'py-3 pr-6 pl-4',
    startups: 'py-2 pr-4 pl-3',
    'startup-page': 'py-4 px-6',
  };

  const avatarSizes = {
    popular: 'size-12',
    startups: 'size-10',
    'startup-page': 'size-14',
  };

  const buttonSizes = {
    popular: 'default',
    startups: 'small',
    'startup-page': 'default',
  };

  const textContainerDirection = {
    popular: 'flex-col',
    startups: 'flex-row items-center gap-2',
    'startup-page': 'flex-col',
  };

  return (
    <div
      className={cn(
        'flew-row group flex items-center gap-3 rounded-xl border border-border bg-subtle',
        styles[type]
      )}
    >
      <Avatar
        className={cn('rounded-xl border border-border', avatarSizes[type])}
      >
        <AvatarImage src={item.avatar_url} />
        <AvatarFallback className="rounded-xl border border-border">
          {item.avatar_fallback}
        </AvatarFallback>
      </Avatar>
      <div className={cn('flex w-full', textContainerDirection[type])}>
        <p className="font-semibold text-base">{item.name}</p>
        <p className="line-clamp-1 text-description text-sm">
          {item.description}
        </p>
      </div>
      <Button size={buttonSizes[type] as 'default' | 'small'} asChild>
        <Link target="_blank" href={item.url}>
          {item.cta}
        </Link>
      </Button>
    </div>
  );
};

export default AdvertiseCard;
