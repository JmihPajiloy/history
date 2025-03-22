"use server";

import { api, getEmail, type QuizResponse } from "@/actions/utils";

export const fetchQuiz = async (quizID: string | number): Promise<QuizResponse> => {
  const email = await getEmail();
  const response = await api.get<QuizResponse>(`/quiz/${quizID}`, {
    headers: {
      "Authorization": email
    }
  });
  return response.data;
};