import prisma from "@/prisma/client";

export const getCountryCount = async () => {
    const countryCount = await prisma.country.count();
    return countryCount;
}