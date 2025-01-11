import Preview from '@/components/preview/preview';
import { Separator } from '@c14/design-system/components/ui/separator';

export const SeparatorPreview = () => (
  <Preview>
    <div>
      <div className="space-y-1">
        <h4 className="text-lg-semibold leading-none">C14</h4>
        <p className="text-description text-md">Open-source startup database</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-md">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  </Preview>
);

export const SeparatorHorizontal = () => (
  <Preview>
    <div>
      <h4 className="text-lg-semibold leading-none">C14</h4>
      <Separator className="my-4" />
      <p className="text-description text-md">Open-source startup database</p>
    </div>
  </Preview>
);

export const SeparatorVertical = () => (
  <Preview>
    <div className="flex h-5 items-center space-x-4 text-md">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </Preview>
);
