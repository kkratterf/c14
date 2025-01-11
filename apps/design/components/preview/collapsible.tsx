import { ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import Preview from '@/components/preview/preview';
import { Button } from '@c14/design-system/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@c14/design-system/components/ui/collapsible';

export const CollapsiblePreview = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Preview>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[340px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <p className="text-md-semibold">@kkratterf starred 4 repositories</p>
          <CollapsibleTrigger asChild>
            <Button variant="text" icon={true}>
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-xl border border-default px-4 py-3 font-mono text-md shadow-sm">
          @c14/design-system
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-xl border border-default px-4 py-3 font-mono text-md shadow-sm">
            @c14/analytics
          </div>
          <div className="rounded-xl border border-default px-4 py-3 font-mono text-md shadow-sm">
            @c14/tailwind-config
          </div>
          <div className="rounded-xl border border-default px-4 py-3 font-mono text-md shadow-sm">
            @c14/typescript-config
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Preview>
  );
};
