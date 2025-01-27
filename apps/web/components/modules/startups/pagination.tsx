'use client';

import Form from 'next/form';
import { useFormStatus } from 'react-dom';

import { Button } from '@c14/design-system/components/ui/button';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';
import { cn } from '@c14/design-system/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SearchParams } from './filters';

function FormValues({
    searchParams,
    pageNumber,
}: {
    searchParams: SearchParams;
    pageNumber: number;
}) {
    const { pending } = useFormStatus();

    return (
        <div data-pending={pending ? '' : undefined}>
            {/* Keep the existing search params */}
            {Object.entries(searchParams).map(
                ([key, value]) =>
                    key !== 'page' && (
                        <input key={key} type="hidden" name={key} value={value as string} />
                    )
            )}
            <input type="hidden" name="page" value={pageNumber.toString()} />
        </div>
    );
}

export function StartupPagination({
    currentPage,
    totalPages,
    totalResults,
    searchParams,
}: {
    currentPage: number;
    totalPages: number;
    totalResults: number;
    searchParams: SearchParams;
}) {
    if (totalPages <= 1) {
        return null;
    }
    return (
        <div className='flex w-full flex-row items-center justify-between gap-2 border-border border-t px-8 py-4'>
            <div className='flex flex-row gap-2 font-mono text-description text-sm'>
                <p><span className='text'>{totalResults.toLocaleString()}</span> Results</p>
                -
                <p>Page <span className='text'>{currentPage.toLocaleString()}</span>/{totalPages.toLocaleString()}</p>
            </div>
            <div className='flex flex-row'>
                <Form action="/startups">
                    <FormValues
                        searchParams={searchParams}
                        pageNumber={Math.max(1, currentPage - 1)}
                    />
                    <Tooltip className='hidden sm:flex' content="Previous page">
                        <Button
                            variant="secondary"
                            className={cn('rounded-r-none', currentPage <= 1 ? 'border-r-0' : '')}
                            type="submit"
                            icon
                            disabled={currentPage <= 1}
                        >
                            <ChevronLeft />
                        </Button>
                    </Tooltip>
                </Form>
                <Form action="/startups">
                    <FormValues
                        searchParams={searchParams}
                        pageNumber={Math.min(totalPages, currentPage + 1)}
                    />
                    <Tooltip className='hidden sm:flex' content="Next page">
                        <Button
                            variant="secondary"
                            type="submit"
                            icon
                            className={cn('rounded-l-none', currentPage >= totalPages ? 'border-l-0' : '')}
                            disabled={currentPage >= totalPages}
                        >
                            <ChevronRight />
                        </Button>
                    </Tooltip>
                </Form>
            </div>
        </div>
    );
}
