import prisma from "@/prisma/client";

export const getTeamSizes = async () => {
    const teamSizes = await prisma.teamSize.findMany();
    return teamSizes;
}