import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { cn, focusRing } from '@c14/design-system/lib/utils';
import { Startup } from '@prisma/client';

interface StartupCardProps {
  item: Startup;
}

const StartupCard = ({ item }: StartupCardProps) => {
  return (
    <Link
      key={item.name}
      href={item.id}
      className={cn('rounded-xl', focusRing)}
    >
      <div className="flew-row group flex items-center gap-3 rounded-xl py-2 pr-4 pl-3 hover:bg-item-hover">
        <Avatar className="size-10 rounded-xl border border-border">
          <AvatarImage src={item.logo ?? undefined} />
          {/* 
            TODO: This should me in a constant with a reference to a default image, local or remote
          <AvatarFallback className="rounded-xl">
            {item.avatar_fallback}
          </AvatarFallback> */}
        </Avatar>
        <div className="flex w-full flex-row items-center gap-2">
          <p className="font-semibold text-base">{item.name}</p>
          <p className="truncate text-description text-sm">
            {item.shortDescription}
          </p>
        </div>
        <ChevronRight className="size-5 stroke-icon opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </div>
    </Link>
  );
};

export default StartupCard;
