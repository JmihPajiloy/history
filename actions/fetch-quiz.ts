"use server";

import { api, getEmail, tryCatch } from "@/actions/utils";
import type { QuizByIDResponse } from "@/actions/types";

export const fetchQuiz = (quizID: string | number) =>
  tryCatch(async () => {
    const email = await getEmail();
    const response = await api.get<QuizByIDResponse>(`/quiz/${quizID}`, {
      headers: {
        Authorization: email
      }
    });
    return response.data;
  });
