import prisma from "@/prisma/client";

export const getLocations = async () => {
    const locations = await prisma.location.findMany();
    return locations;
}

export const getCityCount = async () => {
    const cityCount = await prisma.location.count();
    return cityCount;
}