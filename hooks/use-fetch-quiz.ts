"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchQuiz } from "@/actions";
import { useParams, useSearchParams } from "next/navigation";


export const useFetchQuiz = (id: string) => {
  return useQuery({
    queryKey: ["quiz", id],
    queryFn: async () => {
      const [quiz, err] = await fetchQuiz(id);
      if (err) throw err;
      if (quiz.is_completed) throw {
        type: "QuizAccessError",
        title: "Вам сюда нельзя!",
        details: "Вы не можете пройти квиз, так как уже проходили его ранее!"
      };
      return quiz;

    },
    staleTime: 1000 * 60 * 5
  });
};


export const useCurrentQuiz = () => {
  const { id } = useParams<{ id: string }>();
  return useFetchQuiz(id);
};

export const useQuestion = (quiz: ReturnType<typeof useCurrentQuiz>) => {
  const searchParams = useSearchParams();
  const questionNumber = Number(searchParams.get("question"));

  if (!questionNumber) return NaN;
  if (!quiz.isSuccess) return NaN;
  if (questionNumber > quiz.data.questions.length) return NaN;
  if (questionNumber < 1) return NaN;
  return questionNumber;
};
