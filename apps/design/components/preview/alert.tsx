import { AlertTriangle, Info, Megaphone, XCircle } from 'lucide-react';

import Preview from '@/components/preview/preview';
import { Alert } from '@c14/design-system/components/ui/alert';

export const AlertPreview = () => (
  <Preview>
    <Alert title="Notice" icon={Megaphone}>
      This is a general notification for your attention. It provides neutral
      information or basic reminders for everyday tasks.
    </Alert>
  </Preview>
);

export const AlertBrand = () => (
  <Preview>
    <Alert variant="brand" title="Did you know?" icon={Info}>
      Here&apos;s some useful information or context about the current process
      or section that might be helpful to you.
    </Alert>
  </Preview>
);

export const AlertDanger = () => (
  <Preview>
    <Alert variant="danger" title="Error Detected!" icon={XCircle}>
      Critical issue encountered! Please address this error immediately to
      prevent system failure or data loss.
    </Alert>
  </Preview>
);

export const AlertWarning = () => (
  <Preview>
    <Alert variant="warning" title="Caution Advised" icon={AlertTriangle}>
      Be cautious! There are certain risks associated with this action. Review
      and proceed with care.
    </Alert>
  </Preview>
);
