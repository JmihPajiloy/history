"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchQuiz } from "@/actions";
import { useParams, useSearchParams } from "next/navigation";


export const useFetchQuiz = (id: number | string) => {
  return useQuery({
    queryKey: ["quiz", id],
    queryFn: async () => {
      const quiz = await fetchQuiz(id);
      return quiz;
    }
  });
};


export const useQuiz = () => {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const question = searchParams.get("question");
  const { data: quiz, isSuccess, ...rest } = useFetchQuiz(id);
  const isQuestionValid = (
    !question
    || isNaN(Number(question))
    || Number(question) < 1
    || (isSuccess && Number(question) > quiz.questions.length)
  );
  return {
    ...rest, quiz, id, isQuestionValid, isSuccess, question
  };
};


