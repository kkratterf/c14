import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { cn, focusRing } from '@c14/design-system/lib/utils';

interface PopularCardProps {
  item: {
    name: string;
    description: string;
    avatar_url: string;
    avatar_fallback: string;
    url: string;
  };
}

const PopularCard = ({ item }: PopularCardProps) => {
  return (
    <Link
      key={item.name}
      href={item.url}
      className={cn('rounded-xl', focusRing)}
    >
      <div className="flew-row group flex items-center gap-3 rounded-xl py-3 pr-6 pl-4 hover:bg-item-hover">
        <Avatar className="size-12 rounded-xl">
          <AvatarImage src={item.avatar_url} />
          <AvatarFallback className="rounded-xl">
            {item.avatar_fallback}
          </AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col">
          <p className="font-semibold text-base">{item.name}</p>
          <p className="text-description text-sm">{item.description}</p>
        </div>
        <ChevronRight className="size-5 stroke-icon opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </div>
    </Link>
  );
};

export default PopularCard;
