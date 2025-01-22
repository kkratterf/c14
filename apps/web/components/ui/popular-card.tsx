import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { cn, focusRing } from '@c14/design-system/lib/utils';
import type { Startup } from '@prisma/client';

interface PopularCardProps {
  item: Startup;
}

const PopularCard = ({ item }: PopularCardProps) => {
  return (
    <Link
      key={item.name}
      href={item.id}
      className={cn('rounded-xl', focusRing)}
    >
      <div className='flew-row group flex items-center gap-3 rounded-xl py-3 pr-6 pl-4 hover:bg-item-hover'>
        <Avatar className='size-12 rounded-xl'>
          <AvatarImage src={item.logo ?? undefined} />
          <AvatarFallback className="rounded-xl">
            {item.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className='flex w-full flex-col'>
          <p className="font-semibold text-base">{item.name}</p>
          <p className="text-description text-sm">{item.shortDescription}</p>
        </div>
        <ChevronRight className='size-5 stroke-icon opacity-0 transition-opacity duration-200 group-hover:opacity-100' />
      </div>
    </Link>
  );
};

export default PopularCard;
