import Preview from '@/components/preview/preview';
import { Card } from '@c14/design-system/components/ui/card';
import { Skeleton } from '@c14/design-system/components/ui/skeleton';

export const SkeletonPreview = () => (
  <Preview>
    <div className="flex items-center space-x-4">
      <Skeleton shape="circle" />
      <div className="space-y-2">
        <Skeleton shape="line" className="w-60" />
        <Skeleton shape="line" className="w-40" />
      </div>
    </div>
  </Preview>
);

export const SkeletonCircle = () => (
  <Preview>
    <Skeleton shape="circle" />
  </Preview>
);

export const SkeletonLine = () => (
  <Preview>
    <Skeleton shape="line" className="w-60" />
  </Preview>
);

export const SkeletonCard = () => (
  <Preview>
    <Card>
      <div className="flex items-center space-x-4">
        <Skeleton shape="circle" />
        <div className="space-y-2">
          <Skeleton shape="line" className="w-60" />
          <Skeleton shape="line" className="w-40" />
        </div>
      </div>
    </Card>
  </Preview>
);
