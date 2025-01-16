import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { Button } from '@c14/design-system/components/ui/button';
import {} from '@c14/design-system/lib/utils';

interface AdvertiseCardProps {
  item: {
    name: string;
    description: string;
    avatar_url: string;
    avatar_fallback: string;
    url: string;
    cta: string;
  };
}

const AdvertiseCard = ({ item }: AdvertiseCardProps) => {
  return (
    <div className="flew-row group flex items-center gap-3 rounded-xl border border-border bg-subtle py-3 pr-6 pl-4">
      <Avatar className="size-12 rounded-xl">
        <AvatarImage src={item.avatar_url} />
        <AvatarFallback className="rounded-xl">
          {item.avatar_fallback}
        </AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col">
        <p className="font-semibold text-base">{item.name}</p>
        <p className="line-clamp-1 text-description text-sm">
          {item.description}
        </p>
      </div>
      <Button asChild>
        <Link target="_blank" href={item.url}>
          {item.cta}
        </Link>
      </Button>
    </div>
  );
};

export default AdvertiseCard;
