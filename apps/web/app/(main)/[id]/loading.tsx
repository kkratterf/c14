import { LoaderCircle } from 'lucide-react';

import { cn } from '@c14/design-system/lib/utils';

interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps) {
  return (
    <div className={cn('flex h-full min-h-60 w-full items-center justify-center', className)}>
      <LoaderCircle className="animate-spin stroke-icon" />
    </div>
  );
}
