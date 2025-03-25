"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchQuiz } from "@/actions";
import { useParams, useSearchParams } from "next/navigation";


export const useFetchQuiz = (id: number | string) => {
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


export const useQuiz = () => {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const question = searchParams.get("question");
  const { data: quiz, isSuccess, ...rest } = useFetchQuiz(id);
  const isQuestionValid = !(
    !question
    || isNaN(Number(question))
    || Number(question) < 1
    || (isSuccess && Number(question) > quiz.questions.length)
  );
  return {
    ...rest,
    quiz,
    id,
    isSuccess,
    question: isQuestionValid ? {
      ...quiz?.questions[Number(question) - 1],
      order: Number(question),
      chosenAnswer: quiz
        ?.questions[Number(question) - 1]
        .answers
        ?.filter(x => x.is_chosen)
        .at(0)
        ?.id ?? ""
    } : null
  };
};


