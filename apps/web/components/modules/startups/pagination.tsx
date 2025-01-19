'use client';

import Form from 'next/form';
import { useFormStatus } from 'react-dom';
import { SearchParams } from './filters';
import { Button } from '@c14/design-system/components/ui/button';

function FormValues({
    searchParams,
    pageNumber,
}: {
    searchParams: SearchParams;
    pageNumber: number;
}) {
    let { pending } = useFormStatus();

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

    return (<>
        <Form action="/startups">
            <FormValues
                searchParams={searchParams}
                pageNumber={Math.max(1, currentPage - 1)}
            />
            <Button
                type="submit"
                disabled={currentPage <= 1}
            >
                ←
            </Button>
        </Form>

        <div className="text-sm text-muted-foreground">
            {totalResults.toLocaleString()} results (
            {currentPage.toLocaleString()} of {totalPages.toLocaleString()})
        </div>

        <Form action="/startups">
            <FormValues
                searchParams={searchParams}
                pageNumber={Math.min(totalPages, currentPage + 1)}
            />
            <Button
                type="submit"
                disabled={currentPage >= totalPages}
            >
                →
            </Button>
        </Form></>
    );
}
