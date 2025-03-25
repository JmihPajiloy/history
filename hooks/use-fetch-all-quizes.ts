"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAllQuizes } from "@/actions";

export const useFetchAllQuizes = () => {
  return useQuery({
    queryKey: ["quizes"],
    queryFn: async () => {
      const [data, err] = await fetchAllQuizes();
      if (err) throw err;
      return data;
    },
    staleTime: 1000 * 60 * 5
  });
};