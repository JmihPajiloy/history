"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitAnswer } from "@/actions";

export const useSubmitAnswer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (answerID: number) => submitAnswer(answerID),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["quizes"] });
    }
  });
};