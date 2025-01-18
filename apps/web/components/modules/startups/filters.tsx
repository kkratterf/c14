'use client';

import { Coins, Filter, MapPin, Tags, Users } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@c14/design-system/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@c14/design-system/components/ui/collapsible';
import { Input } from '@c14/design-system/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@c14/design-system/components/ui/select';
import { Toggle } from '@c14/design-system/components/ui/toggle';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';
import { cn } from '@c14/design-system/lib/utils';

const StartupsFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-20 border-border border-b bg-background px-6 py-4">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className={cn('flex flex-col', isOpen ? 'gap-3' : 'gap-0')}
      >
        <div className="flex flex-row items-center justify-between gap-4">
          <Input placeholder="Search" className="max-w-96" />
          <div className="flex flex-row gap-2">
            <CollapsibleTrigger asChild>
              <Tooltip
                content={isOpen ? 'Hide filters' : 'Show filters'}
                className="z-50"
              >
                <Toggle
                  aria-label="Toggle filters"
                  className={cn(
                    'cursor-pointer',
                    isOpen
                      ? 'border-brand-subtle bg-brand-subtle bg-brand-subtle text-brand-strong hover:bg-brand-subtle [&>svg]:stroke-icon-brand-strong'
                      : ''
                  )}
                  pressed={isOpen}
                >
                  <Filter />
                </Toggle>
              </Tooltip>
            </CollapsibleTrigger>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Order by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CollapsibleContent className="flex flex-row gap-2">
          <Button variant="secondary">
            <Tags />
            Categories
          </Button>
          <Button variant="secondary">
            <Coins />
            Funding stage
          </Button>
          <Button variant="secondary">
            <Users />
            Team size
          </Button>
          <Button variant="secondary">
            <MapPin />
            Location
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default StartupsFilters;
