"use server";

import { api, getEmail, tryCatch } from "@/actions/utils";
import type { StatsResponse } from "@/actions/types";

export const fetchQuizStats = (quizID: string) => tryCatch(async () => {
  const email = await getEmail();
  const response = await api.get<StatsResponse>(`/stats/${quizID}`, {
    headers: {
      "Authorization": email
    }
  });
  return response.data;
});