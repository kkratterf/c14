'use client';

import { ModeToggle } from '@c14/design-system/components/mode-toggle';
import { Card } from '@c14/design-system/components/ui/card';

function page() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <ModeToggle />
      <div className="flex h-screen w-screen flex-coitemsfy-centejustifyms-center gap-6 bg-background p-10">
        <Card>Hello</Card>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-subtle p-10">
        <Card>Hello</Card>
      </div>
    </div>
  );
}

export default page;
