'use client';

import type { FoundingStage, Location, Tag, TeamSize } from '@prisma/client';
import { Coins, Pin, Tags, Users, X, } from 'lucide-react';
import { useRouter, useSearchParams, } from 'next/navigation';
import { useMemo, useOptimistic, useState, useTransition } from 'react';

import { Button } from '@c14/design-system/components/ui/button';
import { Input } from '@c14/design-system/components/ui/input';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';

import { StartupsFilter } from '@/components/ui/startups-filter';
import { parseSearchParams } from '@/lib/utils';
import { Skeleton } from '@c14/design-system/components/ui/skeleton';

interface IProps extends IPropsStartupFilters {
  searchParams: URLSearchParams;
}

export interface SearchParams {
  name?: string;
  categories?: string;
  fundingStage?: string;
  teamSize?: string;
  location?: string;
  page: string;
}
export function stringifySearchParams(params: SearchParams): string {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && (Array.isArray(value) ? value.length : true)) {
      urlParams.append(key, value);
    }
  });
  return urlParams.toString();
}


const StartupsFiltersWithParams = ({
  searchParams,
  tags,
  fundingStages,
  teamSizes,
  locations,
}: IProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const initialFilters = parseSearchParams(Object.fromEntries(searchParams));
  const [optimisticFilters, setOptimisticFilters] =
    useOptimistic<SearchParams>(initialFilters);

  const updateURL = (newFilters: SearchParams) => {
    const queryString = stringifySearchParams(newFilters);
    router.replace(queryString ? `/startups?${queryString}` : '/startups', {
      scroll: false
    });
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

  const formattedTags = useMemo(() => tags.map((tag) => ({
    label: tag.name,
    value: tag.id
  })), [tags]);

  const formattedFundingStages = useMemo(() => fundingStages.map((fundingStage) => ({
    label: fundingStage.name,
    value: fundingStage.id
  })), [fundingStages]);

  const formattedTeamSizes = useMemo(() => teamSizes.map((teamSize) => ({
    label: teamSize.name,
    value: teamSize.id
  })), [teamSizes]);

  const formattedLocations = useMemo(() => locations.map((location) => ({
    label: location.name,
    value: location.id
  })), [locations]);

  const handleFacetedFilterChange = (
    filterType: keyof SearchParams,
    values: string[] | undefined
  ) => {
    startTransition(() => {
      const newFilters = {
        ...optimisticFilters,
        [filterType]: values?.join(','),
        page: "1"
      };
      if (!values?.length) {
        delete newFilters[filterType];
      }
      setOptimisticFilters(newFilters);
      updateURL(newFilters);
    });
  };

  const getSelectedValues = (filterType: keyof SearchParams): Set<string> => {
    return new Set(optimisticFilters[filterType]?.split(",") || []);
  };

  const hasActiveFilters = () => {
    return Object.entries(optimisticFilters).some(([key, value]) =>
      key !== 'page' && value !== undefined
    );
  };

  return (
    <div className='sticky top-0 z-20 border-border border-b bg-background px-6 py-4'>
      <div className='flex flex-col items-center gap-2 md:flex-row'>
        <Input placeholder="Search" className="md:max-w-64"
          value={optimisticFilters.name ?? ""}
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <div className='flex w-full flex-row gap-2 md:w-auto'>
          <StartupsFilter
            icon={<Tags />}
            title="Categories"
            tooltip="Categories"
            options={formattedTags}
            selectedValues={getSelectedValues('categories')}
            onFilterChange={(values) => handleFacetedFilterChange('categories', values)}
          />
          <StartupsFilter
            icon={<Coins />}
            title="Funding stage"
            tooltip="Funding stage"
            options={formattedFundingStages}
            selectedValues={getSelectedValues('fundingStage')}
            onFilterChange={(values) => handleFacetedFilterChange('fundingStage', values)}
          />
          <StartupsFilter
            icon={<Users />}
            title="Team size"
            tooltip="Team size"
            options={formattedTeamSizes}
            selectedValues={getSelectedValues('teamSize')}
            onFilterChange={(values) => handleFacetedFilterChange('teamSize', values)}
          />
          <StartupsFilter
            icon={<Pin />}
            title="Location"
            tooltip="Location"
            options={formattedLocations}
            selectedValues={getSelectedValues('location')}
            onFilterChange={(values) => handleFacetedFilterChange('location', values)}
          />
        </div>
        {hasActiveFilters() && (
          <Tooltip content="Reset filters" className='z-50 hidden md:flex lg:hidden'>
            <Button
              className='w-full md:w-auto'
              variant="text"
              onClick={() => {
                startTransition(() => {
                  setOptimisticFilters({ page: "1" });
                  updateURL({ page: "1" });
                });
              }}
            >
              <X className='hidden md:flex lg:hidden' />
              <span className='flex md:hidden lg:flex'>Reset</span>
            </Button>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

interface IPropsStartupFilters {
  tags: Tag[];
  fundingStages: FoundingStage[];
  teamSizes: TeamSize[];
  locations: Location[];
}

const StartupFilters = (props: IPropsStartupFilters) => {
  const searchParams = useSearchParams();
  return <StartupsFiltersWithParams searchParams={searchParams}
    {...props}
  />;
}

export default StartupFilters;

export const StartupFiltersSkeleton = () => {
  return (
    <div className='sticky top-0 z-20 border-border border-b bg-background px-6 py-4'>
      <div className='flex flex-col items-center gap-2 md:flex-row'>
        <Skeleton className='h-9 md:max-w-64' />
        <div className='flex w-full flex-row gap-2 md:w-auto'>
          <Skeleton className='h-9 w-full md:w-20' />
          <Skeleton className='h-9 w-full md:w-20' />
          <Skeleton className='h-9 w-full md:w-20' />
          <Skeleton className='h-9 w-full md:w-20' />
        </div>
      </div>
    </div>
  );
}