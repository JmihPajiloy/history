"use client";

import { useFetchAllQuizes } from "@/hooks";
import { Button } from "@/components/ui/button";
import { QuizCard, QuizCardSkeleton } from "@/components/topics/quizes/quiz-card";

export const QuizList = () => {
  const { isError, refetch, isLoading, isSuccess, data } = useFetchAllQuizes();
  if (isError) {

    return <>
      Произошла ошибка, и нам не удалось получить список квизов
      <Button onClick={() => refetch()}>Обновить</Button>
    </>;
  }
  if (isLoading) {
    return <>
      <QuizCardSkeleton />
      <QuizCardSkeleton />
      <QuizCardSkeleton />
      <QuizCardSkeleton />
      <QuizCardSkeleton />
    </>;
  }
  if (isSuccess) {
    return <>
      <QuizCard is_completed/>
      <QuizCard progress={0.99}/>
    </>;
  }
};