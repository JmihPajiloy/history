"use server";

import { api, tryCatch } from "@/actions/utils";


type GalleryResponse = {
  id: number,
  title: string,
  description: string,
  order: number,
  url: string
}[]


export const fetchGallery = () => tryCatch(async () => {
  const response = await api.get<GalleryResponse>(`/gallery`);
  return response.data;
});