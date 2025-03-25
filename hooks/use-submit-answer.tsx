"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, submitAnswer } from "@/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useSubmitAnswer = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (answerID: string | number) => {
      const [res, err] = await submitAnswer(answerID);
      if (err) throw err;
      return res;
    },
    onSuccess: async (quiz) => {
      console.log(quiz);

      await queryClient.invalidateQueries({ queryKey: ["quizes"] });
      await queryClient.setQueryData(["quiz", quiz.id], () => quiz);
      if (quiz.is_completed) {
        router.push("/")
      }
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