'use client';

import { Coins, Pin, Tags, Users, X, } from 'lucide-react';
import { useRouter, useSearchParams, } from 'next/navigation';
import { useOptimistic, useState, useTransition } from 'react';

import { Button } from '@c14/design-system/components/ui/button';
import { } from '@c14/design-system/components/ui/collapsible';
import { Input } from '@c14/design-system/components/ui/input';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';

import { StartupsFilter } from '@/components/ui/startups-filter';
import { parseSearchParams } from '@/lib/utils';

interface IProps {
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

  const categoryOptions = [
    { label: "SaaS", value: "saas" },
    { label: "AI", value: "ai" },
    { label: "Fintech", value: "fintech" },
  ]

  const fundingStageOptions = [
    { label: "Pre-seed", value: "pre-seed" },
    { label: "Seed", value: "seed" },
    { label: "Series A", value: "series-a" },
    { label: "Series B", value: "series-b" },
  ]

  const teamSizeOptions = [
    { label: "1-10", value: "1-10" },
    { label: "11-50", value: "11-50" },
    { label: "51-100", value: "51-100" },
    { label: "101+", value: "101+" },
  ]

  const locationOptions = [
    { label: "Italy", value: "italy" },
    { label: "Europe", value: "europe" },
    { label: "Worldwide", value: "worldwide" },
  ]

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
    return new Set(optimisticFilters[filterType]?.split(',') || []);
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
            options={categoryOptions}
            selectedValues={getSelectedValues('categories')}
            onFilterChange={(values) => handleFacetedFilterChange('categories', values)}
          />
          <StartupsFilter
            icon={<Coins />}
            title="Funding stage"
            options={fundingStageOptions}
            selectedValues={getSelectedValues('fundingStage')}
            onFilterChange={(values) => handleFacetedFilterChange('fundingStage', values)}
          />
          <StartupsFilter
            icon={<Users />}
            title="Team size"
            options={teamSizeOptions}
            selectedValues={getSelectedValues('teamSize')}
            onFilterChange={(values) => handleFacetedFilterChange('teamSize', values)}
          />
          <StartupsFilter
            icon={<Pin />}
            title="Location"
            options={locationOptions}
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
                setOptimisticFilters({ page: "1" });
                updateURL({ page: "1" });
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

const StartupFilters = () => {
  const searchParams = useSearchParams();
  return <StartupsFiltersWithParams searchParams={searchParams} />;
}

export default StartupFilters;