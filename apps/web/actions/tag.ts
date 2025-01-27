import prisma from "@/prisma/client";

export const getTags = async () => {
    const tags = await prisma.tag.findMany();
    return tags;
}

export const getTagsCount = async () => {
    try {
        const tagsCount = await prisma.tag.count();
        await prisma.$disconnect();
        return tagsCount;
    } catch (error) {
        await prisma.$disconnect();
        throw error;
    }
}