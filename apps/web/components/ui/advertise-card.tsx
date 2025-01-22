import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { Button } from '@c14/design-system/components/ui/button';
import { Tag } from '@c14/design-system/components/ui/tag';
import { cn } from '@c14/design-system/lib/utils';
import type { Startup } from '@prisma/client';

interface AdvertiseCardProps {
  type: 'popular' | 'startups';
  item: Startup;
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
        <AvatarImage src={item.logo ?? undefined} />
        <AvatarFallback className='rounded-xl border border-border'>
          {item.name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div className={cn('flex w-full', textContainerDirection[type])}>
        <p className="font-semibold text-base">{item.name}</p>
        <p className="line-clamp-1 text-description text-sm">
          {item.shortDescription}
        </p>
      </div>
      <Tag variant="brand">ADV</Tag>
      <Button asChild>
        <Link target="_blank" href={item.id}>
          Visit {item.name}
        </Link>
      </Button>
    </div>
  );
};

export default AdvertiseCard;
