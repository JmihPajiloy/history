"use server";

import { api, getEmail, tryCatch } from "@/actions/utils";
import type { QuizAllResponse } from "@/actions/types";

export const fetchAllQuizes = () =>
  tryCatch(async () => {
    const email = await getEmail();
    const res = await api.get<QuizAllResponse>("/quiz", {
      headers: { Authorization: email }
    });
    return res.data;
  });
