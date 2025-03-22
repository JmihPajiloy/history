import { z } from "zod";

export const ArticleResponseSchema = z.object({
  title: z.string(),
  id: z.number(),
  description: z.string().nullable(),
  author: z.string().nullable(),
  content_url: z.string().url().nullable(),
  photo_url: z.string().url().nullable()
});


export type ArticleResponse = z.infer<typeof ArticleResponseSchema>
