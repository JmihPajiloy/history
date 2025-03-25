"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchArticle } from "@/actions";

export const useFetchArticle = (id: string) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: async () => {
      const [data, err] = await fetchArticle(id);
      if (err) throw err;
      return data;
    }
  });
};