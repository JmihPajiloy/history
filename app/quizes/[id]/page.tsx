"use client";

import { useState } from "react";
import { RadioCard, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useCurrentQuiz, useQuestion, useSubmitAnswer } from "@/hooks";
import { toast } from "sonner";
import { CircleOff, DoorClosed, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { QuizPagination } from "@/components/quiz/quiz-pagination";
import { QuizSkeleton } from "@/components/quiz/quiz-skeleton";


const Page = () => {

  const quiz = useCurrentQuiz();
  const question = useQuestion(quiz);
  const mutation = useSubmitAnswer();
  const [answerID, setAnswerID] = useState<string>(() => quiz.data?.questions[question - 1]?.answers.find(ans => ans.is_chosen)?.id.toString() ?? "");

  if (quiz.isError) {
    return (
      <Card className="items-center flex flex-col gap-4 p-8">
        {quiz.error.type === "QuizAccessError" ? <DoorClosed className="size-24" /> :
          <ShieldAlert className="size-24" />}
        <h1 className="text-xl font-semibold text-center">{quiz.error.title ?? "Ошибка"}</h1>
        <p className="text-center text-sm max-w-56">
          {quiz.error.details}
        </p>
      </Card>
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
    <>
      <div className="flex w-96 justify-between items-center py-4">
        <h1 className="font-semibold text-lg">Вопрос #{question} / {quiz.data?.questions.length}</h1>
      </div>
      <p className="text-xl font-medium py-4 text-center">{quiz.data?.questions[question - 1].title}</p>
      {quiz.data?.questions[question - 1].description}
      <form className="flex flex-col gap-2 p-4" onSubmit={async (event) => {
        event.preventDefault();
        if (!answerID) {
          toast.error("Ответ не выбран");
          return;
        }
        mutation.mutate(answerID);
        setAnswerID("");
      }}>
        <RadioGroup className="flex flex-col gap-2 w-96" value={answerID} onValueChange={x => setAnswerID(x)}>
          {
            quiz.data?.questions[question - 1].answers?.map(answer => <RadioCard key={answer.id}
                                                                                 disabled={quiz.data?.questions[question - 1].is_answered}
                                                                                 value={answer.id.toString()}
                                                                                 id={answer.id.toString()}
                                                                                 className="w-full"
            >
              <Label htmlFor={answer.id.toString()}>{answer.title}</Label>
            </RadioCard>)
          }
        </RadioGroup>
        <Button type="submit" className="my-4" disabled={quiz.data?.questions[question - 1].is_answered}>Проверить
          ответ</Button>
      </form>
      <QuizPagination />
    </>
  );
};

export default Page;