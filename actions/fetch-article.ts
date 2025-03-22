"use server";

import { api } from "@/actions/utils";
import type { ArticleResponse } from "@/actions/schemas";
import axios from "axios";

type FetchArticleResponse = ArticleResponse & {
  markdown?: string;
}

export async function fetchArticle(articleID: string): Promise<FetchArticleResponse> {
  const response = await api.get<ArticleResponse>(`/article/${articleID}`);
  if (!response.data.content_url) {
    return response.data;
  }
  const markdown = await axios.get(response.data.content_url);
  return { ...response.data, markdown: markdown.data };
}