import { Activity, AlertTriangle, Info, XCircle } from 'lucide-react';

import Preview from '@/components/preview/preview';
import { Badge } from '@c14/design-system/components/ui/badge';

export const BadgePreview = () => (
  <Preview>
    <Badge>
      <Activity />
      Active
    </Badge>
  </Preview>
);

export const BadgeDefault = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge variant="default">
        <Activity />
        Active
      </Badge>
      <Badge variant="default">Active</Badge>
      <Badge variant="default">
        <Activity />
      </Badge>
      <Badge variant="default">7</Badge>
    </div>
  </Preview>
);

export const BadgeBrand = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge variant="brand">
        <Info />
        Information
      </Badge>
      <Badge variant="brand">Information</Badge>
      <Badge variant="brand">
        <Info />
      </Badge>
      <Badge variant="brand">7</Badge>
    </div>
  </Preview>
);

export const BadgeDanger = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge variant="danger">
        <XCircle />
        Error
      </Badge>
      <Badge variant="danger">Error</Badge>
      <Badge variant="danger">
        <XCircle />
      </Badge>
      <Badge variant="danger">7</Badge>
    </div>
  </Preview>
);

export const BadgeWarning = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge variant="warning">
        <AlertTriangle />
        Caution
      </Badge>
      <Badge variant="warning">Caution</Badge>
      <Badge variant="warning">
        <AlertTriangle />
      </Badge>
      <Badge variant="warning">7</Badge>
    </div>
  </Preview>
);
