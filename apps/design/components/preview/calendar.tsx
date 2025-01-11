'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format, isAfter, isBefore } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import Preview from '@/components/preview/preview';
import { Button } from '@c14/design-system/components/ui/button';
import { Calendar } from '@c14/design-system/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@c14/design-system/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@c14/design-system/components/ui/popover';
import { toast } from '@c14/design-system/components/ui/toast';
import { cn } from '@c14/design-system/lib/utils';

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
});

const CalendarForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the following values:', {
      description: JSON.stringify(data, null, 2),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="secondary"
                      className={cn(
                        'w-60 pl-3 text-left font-normal',
                        !field.value && 'text-placeholder'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto size-4 opacity-disabled" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      isAfter(date, new Date()) ||
                      isBefore(date, new Date('1900-01-01'))
                    }
                    initialFocus
                    className="calendar-fix"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
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

export const CalendarPreview = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Preview>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="calendar-fix rounded border border-default"
      />
    </Preview>
  );
};

export const CalendarWithForm = () => (
  <Preview>
    <CalendarForm />
  </Preview>
);
