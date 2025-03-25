"use server";

import { api, tryCatch } from "@/actions/utils";
import type { ArticleAllResponse } from "@/actions/types";


export const fetchAllArticles = () => tryCatch(async () => {
  const res = await api.get<ArticleAllResponse>("/article");
  return res.data;
});