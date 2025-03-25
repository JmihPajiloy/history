"use client";

import { useState } from "react";
import { RadioCard, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useQuiz, useSubmitAnswer } from "@/hooks";
import { toast } from "sonner";
import { CircleOff, DoorClosed, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { QuizPagination } from "@/components/quiz/quiz-pagination";
import { QuizSkeleton } from "@/components/quiz/quiz-skeleton";


const Page = () => {

  const { isError, isLoading, quiz, question, error } = useQuiz();
  const mutation = useSubmitAnswer();
  const [answerID, setAnswerID] = useState<string>(question?.chosenAnswer?.toString() ?? "");

  if (isError) {
    return (
      <Card className="items-center flex flex-col gap-4 p-8">
        {error.type === "QuizAccessError" ? <DoorClosed className="size-24" /> : <ShieldAlert className="size-24" />}
        <h1 className="text-xl font-semibold text-center">{error.title ?? "Ошибка"}</h1>
        <p className="text-center text-sm max-w-56">
          {error.details}
        </p>
      </Card>
    );
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
          <Link href={`/quizes/${quiz?.id}?question=1`}>
            В начало квиза
          </Link>
        </Button>
      </Card>
    );
  }


  if (isLoading) {
    return <QuizSkeleton />;
  }

  return (
    <>
      <div className="flex w-96 justify-between items-center py-4">
        <h1 className="font-semibold text-lg">Вопрос #{question.order} / {quiz?.questions.length}</h1>
      </div>
      <p className="text-xl font-medium py-4 text-center">{question.title}</p>
      {question.description}
      <form className="flex flex-col gap-2 p-4" onSubmit={async (event) => {
        event.preventDefault();
        if (!answerID) {
          toast.error("Ответ не выбран");
          return;
        }
        mutation.mutate(answerID);
        setAnswerID("");
      }}>
        <RadioGroup className="grid grid-cols-2" value={answerID} onValueChange={x => setAnswerID(x)}>
          {
            question.answers?.map(answer => <RadioCard key={answer.id}
                                                       disabled={question.is_answered}
                                                       value={answer.id.toString()}
                                                       id={answer.id.toString()}>
              <Label htmlFor={answer.id.toString()}>{answer.title}</Label>
            </RadioCard>)
          }
        </RadioGroup>
        <Button type="submit" className="my-4" disabled={question.is_answered}>Проверить ответ</Button>
      </form>
      <QuizPagination/>
    </>
  );
};

export default Page;