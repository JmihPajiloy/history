"use server";

import { api, tryCatch } from "@/actions/utils";
import type { ArticleByIDResponse } from "@/actions/types";
import axios from "axios";

type FetchArticleResponse = ArticleByIDResponse & {
  markdown?: string;
}

export const fetchArticle = (articleID: string) => tryCatch<FetchArticleResponse>(async () => {
  const response = await api.get<ArticleByIDResponse>(`/article/${articleID}`);
  if (!response.data.content_url) {
    return response.data;
  }
  const markdown = await axios.get(response.data.content_url);
  console.log(markdown.data);

  return {
    ...response.data,
    markdown: markdown.data//.replace(/[<>]/g, "")
  };
});