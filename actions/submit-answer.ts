"use server";

import { api, getEmail, tryCatch } from "@/actions/utils";
import type { QuizByIDResponse } from "@/actions/types";

export const submitAnswer = (answerID: number | string) => tryCatch(async () => {
  const email = await getEmail();
  const response = await api.post<QuizByIDResponse>(`/answer/${answerID}`, null, {
    headers: { "Authorization": email }
  });
  return response.data;
});