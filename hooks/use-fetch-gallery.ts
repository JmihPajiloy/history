"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "@/actions";

export const useFetchGallery = () => {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const [data, err] = await fetchGallery();
      if (err) throw err;
      return data.sort((a, b) => a.order - b.order);
    }
  });
};