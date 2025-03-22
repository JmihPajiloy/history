"use server";

import { api, getEmail } from "@/actions/utils";

export const submitAnswer = async (answerID: number) => {
  const email = await getEmail();
  const response = await api.post(`/answer/${answerID}`, {
    headers: {
      "Authorization": email
    }
  });
  return response.data;
};