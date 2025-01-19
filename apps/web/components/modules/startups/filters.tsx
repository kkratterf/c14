'use client';

import { Coins, Filter, MapPin, Tags, Users } from 'lucide-react';
import { useOptimistic, useState, useTransition } from 'react';

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
import { useRouter, useSearchParams } from 'next/navigation';
import { parseSearchParams } from '@/app/utils';

interface IProps {
  searchParams: URLSearchParams;
}

export interface SearchParams {
  name?: string;
  page: string;
}
export function stringifySearchParams(params: SearchParams): string {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlParams.append(key, value);
    }
  });
  return urlParams.toString();
}


const StartupsFiltersWithParams = ({
  searchParams
}: IProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const initialFilters = parseSearchParams(Object.fromEntries(searchParams));
  const [optimisticFilters, setOptimisticFilters] =
    useOptimistic<SearchParams>(initialFilters);

  const updateURL = (newFilters: SearchParams) => {
    const queryString = stringifySearchParams(newFilters);
    router.push(queryString ? `startups/?${queryString}` : '/startups');
  };

  const handleFilterChange = (
    filterType: keyof SearchParams,
    value: string | undefined
  ) => {
    startTransition(() => {
      const newFilters = { ...optimisticFilters, [filterType]: value, page: "1" };
      if (!value) {
        delete newFilters[filterType];
      }
      setOptimisticFilters(newFilters);
      updateURL(newFilters);
    });
  };

  return (
    <div className="sticky top-0 z-20 border-border border-b bg-background px-6 py-4">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className={cn('flex flex-col', isOpen ? 'gap-3' : 'gap-0')}
      >
        <div className="flex flex-row items-center justify-between gap-4">
          <Input placeholder="Search" className="max-w-96"
            value={optimisticFilters.name ?? ""}
            onChange={(e) => handleFilterChange('name', e.target.value)}
          />
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

const StartupFilters = () => {
  const searchParams = useSearchParams();
  return <StartupsFiltersWithParams searchParams={searchParams} />;
}

export default StartupFilters;