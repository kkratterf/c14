import type { SearchParams } from "@/components/modules/startups/filters";
import type { Founder } from "@prisma/client";

export const founderFullName = (founder: Founder) => {
    return `${founder.firstName} ${founder.lastName}`;
}

export function parseSearchParams(
    params: Record<string, string | string[] | undefined>
): SearchParams {
    return {
        name: typeof params.name === 'string' ? params.name : undefined,
        page: typeof params.page === 'string' ? params.page : "1",
        categories: typeof params.categories === 'string' ? params.categories : undefined,
        fundingStage: typeof params.fundingStage === 'string' ? params.fundingStage : undefined,
        location: typeof params.location === 'string' ? params.location : undefined,
        teamSize: typeof params.teamSize === 'string' ? params.teamSize : undefined
    };
}