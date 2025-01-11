import Preview from '@/components/preview/preview';
import { Button } from '@c14/design-system/components/ui/button';
import { toast } from '@c14/design-system/components/ui/toast';

export const ToastPreview = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast('Your message has been sent.');
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastSimple = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast('Your message has been sent.');
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWithTitle = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast('Your message has been sent.', {
            description: 'There was a problem with your request.',
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWithAction = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast('Your message has been sent.', {
            description: 'There was a problem with your request.',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastDanger = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast.error('Your message has been sent.', {
            description: 'There was a problem with your request.',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWarning = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast.warning('Your message has been sent.', {
            description: 'There was a problem with your request.',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};
