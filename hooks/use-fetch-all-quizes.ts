"use client"

import { useQuery } from "@tanstack/react-query";
import { fetchAllQuizes } from "@/actions";

export const useFetchAllQuizes = () => {
  return useQuery({
    queryKey: ["quizes"],
    queryFn: async () => fetchAllQuizes(),
  });
};