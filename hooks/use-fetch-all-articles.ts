"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAllArticles } from "@/actions";

export const useFetchAllArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchAllArticles()
  });
};