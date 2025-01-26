import prisma from "@/prisma/client";

export const getTags = async () => {
    const tags = await prisma.tag.findMany();
    return tags;
}