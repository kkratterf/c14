import Link from 'next/link';

import { NumberTicker } from '@/components/ui/number-ticker';
import { cn, focusRing } from '@c14/design-system/lib/utils';

interface HeroCardProps {
  url: string;
  title: string;
  number?: string | number;
}

const HeroCard = ({ url, title, number }: HeroCardProps) => {
  return (
    <Link href={url} className={cn('rounded-xl', focusRing)}>
      <div
        className='flex flex-row items-center justify-between rounded-xl border border-border p-4 hover:border-item'
      >
        <p className="font-brand text-lg">{title}</p>
        {number && (
          <NumberTicker
            className={cn(
              'font-mono text-base text-description'
            )}
            value={Number(number)}
          />
        )}
      </div>
    </Link >
  );
};

export default HeroCard;
