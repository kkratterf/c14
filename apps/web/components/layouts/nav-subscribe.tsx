'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@c14/design-system/components/ui/button';
import Link from 'next/link';

export default function SubscribeNavigation() {
  const router = useRouter();

  return (
    <div className="flex justify-between p-6">
      <Button variant="text" onClick={() => router.back()}>
        Back
      </Button>
      <Button variant="text" asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
