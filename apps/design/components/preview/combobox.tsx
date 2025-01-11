'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import Preview from '@/components/preview/preview';
import { Button } from '@c14/design-system/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@c14/design-system/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@c14/design-system/components/ui/popover';
import { cn } from '@c14/design-system/lib/utils';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const ComboboxDemo = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          aria-expanded={open}
          className={cn(
            'w-[240px] justify-between font-normal placeholder:text-placeholder',
            value
              ? frameworks.find((framework) => framework.value === value)?.label
              : 'text-placeholder'
          )}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <ChevronsUpDown className="!stroke-2 ml-2 size-4 shrink-0 stroke-icon" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="!bg-item focus:!ring-0 focus:!ring-offset-0 focus:!ring-offset-transparent h-9"
          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                className="flex items-center justify-between gap-2"
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <span
                  className={cn(value === framework.value ? 'text-brand' : '')}
                >
                  {framework.label}
                </span>
                <Check
                  className={cn(
                    'ml-2 size-4 stroke-icon-brand',
                    value === framework.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const ComboboxPreview = () => (
  <Preview>
    <ComboboxDemo />
  </Preview>
);
