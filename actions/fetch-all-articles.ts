"use server";

import { z } from "zod";
import { api } from "@/actions/utils";
import { ArticleResponse, ArticleResponseSchema } from "@/actions/schemas";


const isValidArticleResponseList = (article: unknown): article is ArticleResponse[] => {
  return z.array(ArticleResponseSchema).safeParse(article).success;
};

export async function fetchAllArticles(): Promise<ArticleResponse[]> {
  const res = await api.get<ArticleResponse[]>("/article");

  return res.data;
}