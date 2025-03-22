"use server";

import { api, getEmail, type QuizResponse } from "@/actions/utils";

export async function fetchAllQuizes() {
  const email = await getEmail();

  const res = await api.get<QuizResponse[]>("/quiz", {
    headers: { "Authorization": email }
  });
  console.log("fetch-all-quizes", res.data);
  return res.data;
}