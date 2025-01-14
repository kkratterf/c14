import Link from 'next/link';

import { NumberTicker } from '@/components/ui/number-ticker';
import { cn, focusRing } from '@c14/design-system/lib/utils';

interface HeroCardProps {
  url: string;
  title: string;
  number?: string | number;
  disabled?: boolean;
}

const HeroCard = ({ url, title, number, disabled }: HeroCardProps) => {
  return (
    <Link href={url} className={cn('rounded-xl', focusRing)}>
      <div
        className={cn(
          'group flex flex-row items-center justify-between rounded-xl border border-border p-4 hover:border-item',
          disabled && 'cursor-not-allowed border-none opacity-50'
        )}
      >
        <p className="font-brand text-lg">{title}</p>
        {number && (
          <NumberTicker
            className={cn(
              'font-mono text-base text-description opacity-0 transition-opacity duration-500 group-hover:opacity-100',
              disabled && 'group-hover:opacity-0'
            )}
            value={Number(number)}
          />
        )}
      </div>
    </Link>
  );
};

export default HeroCard;
