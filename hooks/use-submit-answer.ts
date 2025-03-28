"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, submitAnswer } from "@/actions";
import { toast } from "sonner";

export const useSubmitAnswer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (answerID: string | number) => {
      const [res, err] = await submitAnswer(answerID);
      if (err) throw err;
      return res;
    },
    onSuccess: async (quiz) => {
      queryClient.setQueryData(["quiz", quiz.id.toString()], quiz);
      await queryClient.invalidateQueries({ queryKey: ["quizes"] });
    },
    onError: async (error: ErrorResponse) => {
      if (error.type === "HttpError" && error.status) {
        toast.error(`Ошибка ${error.status}`, { description: error.details });
      } else {
        toast.error("Произошла ошибка", { description: error.details });
      }

    }
  });
};