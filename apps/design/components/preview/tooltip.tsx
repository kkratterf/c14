import { FilePlus } from 'lucide-react';

import Preview from '@/components/preview/preview';
import { Button } from '@c14/design-system/components/ui/button';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';

export const TooltipPreview = () => (
  <Preview>
    <Tooltip content="Add to library">
      <Button variant="secondary" icon={true}>
        <FilePlus />
      </Button>
    </Tooltip>
  </Preview>
);

export const TooltipSide = () => (
  <Preview>
    <div className="grid justify-items-center gap-5 sm:flex">
      <Tooltip content="Add to library" side="top">
        <Button variant="secondary" icon={true}>
          <FilePlus />
        </Button>
      </Tooltip>
      <Tooltip content="Add to library" side="bottom">
        <Button variant="secondary" icon={true}>
          <FilePlus />
        </Button>
      </Tooltip>
      <Tooltip content="Add to library" side="left">
        <Button variant="secondary" icon={true}>
          <FilePlus />
        </Button>
      </Tooltip>
      <Tooltip content="Add to library" side="right">
        <Button variant="secondary" icon={true}>
          <FilePlus />
        </Button>
      </Tooltip>
    </div>
  </Preview>
);
