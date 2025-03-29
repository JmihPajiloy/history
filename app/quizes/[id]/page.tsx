"use client";

import { type FormEvent, useCallback, useState } from "react";
import { RadioCard, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useCurrentQuiz, useFetchQuiz, useQuestion, useSubmitAnswer } from "@/hooks";
import { toast } from "sonner";
import { ChartColumnBig, CircleOff, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { QuizPagination } from "@/components/quiz/quiz-pagination";
import { QuizSkeleton } from "@/components/quiz/quiz-skeleton";
import { ErrorCard } from "@/components/error-card";
import Image from "next/image";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

const QuizForm = () => {
  const { id } = useParams<{ id: string }>();
  const quiz = useFetchQuiz(id);
  const mutation = useSubmitAnswer();
  const questionID = useQuestion(quiz);
  const currentQuestion = quiz.data?.questions[questionID - 1];
  const [answerID, setAnswerID] = useState<string>(() => currentQuestion?.answers.find(ans => ans.is_chosen)?.id.toString() ?? "");

  const submit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!answerID) {
      toast.error("Ответ не выбран");
      return;
    }
    mutation.mutate(answerID);
    setAnswerID("");
  }, [answerID]);

  return (
    <form className="flex flex-col gap-2 p-4" onSubmit={submit}>
      <RadioGroup className="flex flex-col gap-2 w-96" value={answerID} onValueChange={x => setAnswerID(x)}>
        {
          currentQuestion?.answers?.map(answer => <RadioCard key={answer.id}
                                                             disabled={currentQuestion.is_answered}
                                                             value={answer.id.toString()}
                                                             id={answer.id.toString()}
                                                             className={cn(
                                                               "w-full",
                                                               currentQuestion.is_answered && answer.is_chosen && !answer.is_correct
                                                                 ? "bg-destructive"
                                                                 : currentQuestion.is_answered && answer.is_correct ? "bg-success" : ""
                                                             )}
          >
            <Label htmlFor={answer.id.toString()}>{answer.title}</Label>
          </RadioCard>)
        }
      </RadioGroup>
      {
        quiz.data?.is_completed
          ? <Button type="button" variant="secondary" className="w-full" asChild>
          <Link href={`/quizes/${id}/stats`}>
            <ChartColumnBig className="size-4" />Посмотреть статистику
          </Link>
          </Button>
          : <Button
            type="submit"
            className="my-4"
            disabled={quiz.data?.questions[questionID - 1].is_answered}>
            Проверить ответ
          </Button>
      }

    </form>
  );
};

const Page = () => {

  const quiz = useCurrentQuiz();
  const question = useQuestion(quiz);

  if (quiz.isError) {
    return (
      <ErrorCard error={quiz.error}>
        <ShieldAlert className="size-24" />
      </ErrorCard>
    );
  }

  if (quiz.isLoading) {
    return <QuizSkeleton />;
  }

  if (!question) {
    return (
      <Card className="items-center flex flex-col gap-4 p-8">
        <CircleOff className="size-24" />
        <h1 className="text-xl font-semibold text-center">Вопрос не найден</h1>
        <p className="text-center text-sm max-w-56">
          Мы не смогли найти вопрос с таким номером в этом квизе
        </p>
        <Button className="w-full">
          <Link href={`/quizes/${quiz.data?.id}?question=1`}>
            В начало квиза
          </Link>
        </Button>
      </Card>
    );
  }
  return (
    <div className="flex flex-col gap-2 items-center py-4 w-96">
      <div className="flex w-96 justify-between items-center ">
        <h1 className="font-semibold text-lg">Вопрос {question} / {quiz.data?.questions.length}</h1>
      </div>
      <h2 className="text-lg font-medium pt-4 w-96">
        {quiz.data?.questions[question - 1].title}
      </h2>
      {quiz.data?.questions[question - 1].description}
      {
        quiz.data?.questions[question - 1].photos_url?.at(0) &&
        <div className="h-60 w-96 overflow-hidden relative">
          <Image src={quiz.data?.questions[question - 1].photos_url[0] ?? ""}
                 alt=""
                 fill
                 className="object-contain w-full"
          />
        </div>
      }
      <QuizForm />
      <QuizPagination />
    </div>
  );
};

export default Page;