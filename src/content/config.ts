import { defineCollection, reference, z } from "astro:content";

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        versions: z.array(z.string()),
    })
});

const docs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        group: z.string(),
    })
})

export const collections = {
    projects,
    docs,
};