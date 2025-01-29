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

interface PopularCardProps {
  item: Startup;
}

export const PopularCard = ({ item }: PopularCardProps) => {
  return (
    <Link
      key={item.name}
      href={item.id}
      className={cn('rounded-2xl', focusRing)}
    >
      <div className='group group flew-row flex items-center gap-3 rounded-2xl py-3 pr-6 pl-4 hover:bg-item-hover'>
        <Avatar className='size-12 rounded-2xl'>
          <AvatarImage className='transition-all duration-400 group-hover:scale-105' src={item.logo ?? undefined} />
          <AvatarFallback className="rounded-xl">
            {item.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className='flex w-full flex-col'>
          <p className="line-clamp-1 font-semibold text-base">{item.name}</p>
          <p className="line-clamp-1 text-description text-sm">{item.shortDescription}</p>
        </div>
        <ChevronRight className='size-5 stroke-icon opacity-0 transition-opacity duration-400 group-hover:opacity-100' />
      </div>
    </Link>
  );
};

export const PopularCardSkeleton = () => {
  return (

    <div className='group flew-row flex items-center gap-3 rounded-xl py-3 pr-6 pl-4'>
      <Skeleton className='size-12 rounded-xl' />
      <div className='flex flex-col gap-1'>
        <Skeleton className='w-40 rounded-md' />
        <Skeleton className='h-3 w-24 rounded-md' />
      </div>
    </div>
  );
};
