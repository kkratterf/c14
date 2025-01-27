import prisma from "@/prisma/client";

export const getFundingStages = async () => {
    const fundingStages = await prisma.foundingStage.findMany();
    return fundingStages;
}