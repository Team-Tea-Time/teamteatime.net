import { defineCollection, reference, z } from "astro:content";

const docs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        order: z.number(),
    })
})

export const collections = {
    docs,
};