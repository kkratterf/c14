import { SearchParams } from "@/components/modules/startups/filters";
import { Founder } from "@prisma/client";

export const founderFullName = (founder: Founder) => {
    return `${founder.firstName} ${founder.lastName}`;
}

export function parseSearchParams(
    params: Record<string, string | string[] | undefined>
): SearchParams {
    return {
        name: typeof params.name === 'string' ? params.name : undefined,
        page: typeof params.page === 'string' ? params.page : "1",
    };
}