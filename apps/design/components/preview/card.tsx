import Preview from '@/components/preview/preview';
import { BellRing, Check } from 'lucide-react';
import type * as React from 'react';

import { Button } from '@c14/design-system/components/ui/button';
import { Card } from '@c14/design-system/components/ui/card';
import { Input } from '@c14/design-system/components/ui/input';
import { Label } from '@c14/design-system/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@c14/design-system/components/ui/select';
import { Switch } from '@c14/design-system/components/ui/switch';
import { cn } from '@c14/design-system/lib/utils';

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

const CardDemo = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <div className="flex flex-col justify-center gap-1 pb-6">
        <h1 className="text-heading-subsection">Create project</h1>
        <p className="text-description">
          Deploy your new project in one-click.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center space-x-4 rounded border border-default p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-md-medium leading-none">Push Notifications</p>
            <p className="text-description text-md">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div className="p-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex size-2 translate-y-1 rounded-full bg-brand" />
              <div className="space-y-1">
                <p className="text-md-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-description text-md">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full pt-6">
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </div>
    </Card>
  );
};

export const CardPreview = () => (
  <Preview>
    <Card className="w-[380px]">
      <div className="flex flex-col justify-center gap-1 pb-6">
        <h1 className="text-heading-subsection">Create project</h1>
        <p className="text-description">
          Deploy your new project in one-click.
        </p>
      </div>
      <div>
        <form>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex w-full flex-col space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="patch-input"
                placeholder="Name of your project"
              />
            </div>
            <div className="flex w-full flex-col space-y-2">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end gap-2 pt-6">
        <Button variant="secondary">Cancel</Button>
        <Button>Deploy</Button>
      </div>
    </Card>
  </Preview>
);

export const CardWithMapping = () => (
  <Preview>
    <CardDemo />
  </Preview>
);
