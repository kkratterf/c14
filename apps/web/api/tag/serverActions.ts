import prisma from "@/prisma/client";

export const getTags = async () => {
    const tags = await prisma.tag.findMany();
    return tags;
}

export const getTagsCount = async () => {
    const tagsCount = await prisma.tag.count();
    return tagsCount;
}