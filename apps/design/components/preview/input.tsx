'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import Preview from '@/components/preview/preview';
import { Button } from '@c14/design-system/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@c14/design-system/components/ui/form';
import { Input } from '@c14/design-system/components/ui/input';
import { Label } from '@c14/design-system/components/ui/label';
import { toast } from '@c14/design-system/components/ui/toast';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const InputFormDemo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the following values:', {
      description: JSON.stringify(data, null, 2),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[340px] space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="@mscott"
                  {...field}
                  className="patch-input"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const InputPreview = () => (
  <Preview>
    <Input type="email" placeholder="Email" className="patch-input w-80" />
  </Preview>
);

export const InputFile = () => (
  <Preview>
    <Input type="file" className="patch-input w-80" />
  </Preview>
);

export const InputDisabled = () => (
  <Preview>
    <Input placeholder="Email" disabled className="patch-input w-80" />
  </Preview>
);

export const InputWithLabel = () => (
  <Preview>
    <div className="grid w-80 max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="Email"
        className="patch-input"
      />
    </div>
  </Preview>
);

export const InputWithButton = () => (
  <Preview>
    <div className="flex w-80 max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" className="patch-input" />
      <Button type="submit">Subscribe</Button>
    </div>
  </Preview>
);

export const InputWithForm = () => (
  <Preview>
    <InputFormDemo />
  </Preview>
);
