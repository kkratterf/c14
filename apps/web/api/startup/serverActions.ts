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
    isPopular?: boolean;
    positionForFeatured?: number;
    page?: number;
}

export const PAGE_SIZE = 10;

export const getStartups = async ({ name, isPopular, positionForFeatured, page = 1 }: GetStartups) => {
    const query = {
        where: {
            isPopular: isPopular,
            //We will place the featured in the correct place later
            isFeatured: false,
            name: {
                contains: name
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