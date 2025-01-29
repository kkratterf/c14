import type { Startup } from '@prisma/client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { Skeleton } from '@c14/design-system/components/ui/skeleton';
import { cn, focusRing } from '@c14/design-system/lib/utils';

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
      <div className='group group flew-row flex items-center gap-3 rounded-xl py-2 pr-4 pl-3 hover:bg-item-hover'>
        <Avatar className='size-10 rounded-xl border border-border'>
          <AvatarImage className='transition-all duration-400 group-hover:scale-105' src={item.logo ?? undefined} />
          <AvatarFallback className="rounded-xl">
            {item.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className='flex w-full flex-row items-center gap-2'>
          <p className='whitespace-nowrap font-semibold text-base'>{item.name}</p>
          <p className='line-clamp-1 text-description text-sm'>
            {item.shortDescription}
          </p>
        </div>
        <ChevronRight className='size-5 stroke-icon opacity-0 transition-opacity duration-400 group-hover:opacity-100' />
      </div>
    </Link>
  );
};

export default StartupCard;

export const StartupCardSkeleton = () => {
  return (
    <div className='group flew-row flex items-center gap-3 rounded-xl py-2 pr-4 pl-3'>
      <Skeleton className='size-10 rounded-xl' />
      <div className='flex w-full flex-row items-center gap-2'>
        <Skeleton className='h-5 w-full rounded-md' />
      </div>
    </div>);
};
