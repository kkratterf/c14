import Link from 'next/link';

import { Button } from '@c14/design-system/components/ui/button';
import { useSidebar } from '@c14/design-system/components/ui/sidebar';
import { cn } from '@c14/design-system/lib/utils';

const NewsletterBanner = () => {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <div
      className={cn(
        'mb-4 flex flex-col gap-5 rounded-xl border border-border bg-background p-4 shadow-sm',
        isCollapsed
          ? 'size-0 scale-20 opacity-0'
          : 'size-auto scale-100 opacity-100 transition-all delay-200 duration-400'
      )}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-brand text-base">Discover the best startups</h2>
        <p className="text-description text-sm">
          Insights, benchmarks, and updates in your inbox.
        </p>
      </div>
      {!isCollapsed && (
        <Button asChild>
          <Link href="/subscribe">Subscribe for free</Link>
        </Button>
      )}
    </div>
  );
};

export default NewsletterBanner;
