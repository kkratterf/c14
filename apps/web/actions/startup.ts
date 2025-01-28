import type { Prisma } from "@prisma/client";

import prisma from "@/prisma/client";

const includeForUsefullDataStartup = {
    FounderStartup: {
        include: {
            founder: true
        }
    },
    foundingStage: true,
    InvestorStartup: {
        include: {
            investor: true
        }
    },
    location: true,
    StartupTag: {
        include: {
            tag: true
        }
    },
    teamSize: true
};

export const getStartupFromId = async (id: string) => {
    const startup = await prisma.startup.findUnique({
        where: {
            id: id
        },
        include: includeForUsefullDataStartup
    });
    return startup;
}

interface GetStartups {
    name?: string;
    tags?: string[];
    fundingStages?: string[];
    teamSizes?: string[];
    locations?: string[];
    isPopular?: boolean;
    positionForFeatured?: number;
    page?: number;
}

export const PAGE_SIZE = 10;

export const getStartups = async ({ name, tags, fundingStages, teamSizes, locations, isPopular, positionForFeatured, page = 1 }: GetStartups) => {
    const query: Prisma.StartupFindManyArgs = {
        where: {
            isPopular: isPopular,
            //We will place the featured in the correct place later
            isFeatured: false,
            name: {
                contains: name
            },
            StartupTag: {
                some: {
                    tagid: {
                        in: tags
                    }
                }
            },
            foundingStageid: {
                in: fundingStages
            },
            teamSizeid: {
                in: teamSizes
            },
            locationid: {
                in: locations
            }
        },
        take: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
        include: includeForUsefullDataStartup

    };
    const [startups, count] = await prisma.$transaction([
        prisma.startup.findMany(query),
        prisma.startup.count({ where: query.where })
    ])
    //Return the featured only if at least 1 result is there
    if (count > 0) {
        const featuredStartup = await getFeaturedStartup();
        if (featuredStartup) {

            startups.splice(positionForFeatured ?? startups.length, 0, featuredStartup);
        }
    }
    return { startups, count };
}

export const getFeaturedStartup = async () => {
    const startup = await prisma.startup.findFirst({
        where: {
            isFeatured: true
        },
        take: 1,
        include: includeForUsefullDataStartup
    });
    return startup;
}

export const getStartupsCount = async () => {
    try {
        const count = await prisma.startup.count();
        return count;
    } catch (error) {
        await prisma.$disconnect();
        throw error;
    }
};


export const getStartupsByCategory = async () => {
    //Use LEFT join instead of join if you want to include the categories with 0 startups
    const raw: {
        tagid: string;
        name: string;
        startups: number;
    }[] = await prisma.$queryRaw`
    SELECT "Tag"."id", name,
    COUNT("StartupTag"."tagid")::int AS startups
     FROM "Tag" JOIN "StartupTag" ON "Tag"."id" = "StartupTag"."tagid"
        GROUP BY "Tag"."id", "name" 
    `
    return raw;
}

export const getStartupsByTeamSize = async () => {
    const raw: {
        teamSizeid: string;
        name: string;
        startups: number;
    }[] = await prisma.$queryRaw`
    SELECT "TeamSize"."id", "TeamSize".name,
    COUNT("Startup"."teamSizeid")::int AS startups
     FROM "TeamSize" JOIN "Startup" ON "TeamSize"."id" = "Startup"."teamSizeid"
        GROUP BY "TeamSize"."id", "TeamSize"."name" 
    `
    return raw;
}

export const getStartupsByFundingStage = async () => {
    const raw: {
        foundingStageid: string;
        name: string;
        startups: number;
    }[] = await prisma.$queryRaw`
    SELECT "FoundingStage"."id", "FoundingStage".name,
    COUNT("Startup"."foundingStageid")::int AS startups
     FROM "FoundingStage" JOIN "Startup" ON "FoundingStage"."id" = "Startup"."foundingStageid"
        GROUP BY "FoundingStage"."id", "FoundingStage"."name" 
    `
    return raw;
}

export const getStartupsByLocation = async () => {
    const raw: {
        locationid: string;
        name: string;
        startups: number;
    }[] = await prisma.$queryRaw`
    SELECT "Location"."id", "Location".name,
    COUNT("Startup"."locationid")::int AS startups
     FROM "Location" JOIN "Startup" ON "Location"."id" = "Startup"."locationid"
        GROUP BY "Location"."id", "Location"."name" 
    `
    return raw;
}
