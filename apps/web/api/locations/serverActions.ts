import prisma from "@/prisma/client";

export const getLocations = async () => {
    const locations = await prisma.location.findMany();
    return locations;
}