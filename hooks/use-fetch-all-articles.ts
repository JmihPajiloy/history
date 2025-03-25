"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAllArticles } from "@/actions";

export const useFetchAllArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const [data, err] = await fetchAllArticles();
      if (err) throw err;
      return data;
    },
    staleTime: Infinity
  });
};