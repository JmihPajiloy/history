"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { useFetchQuiz, useQuestion } from "@/hooks";
import type { AnswerResponse } from "@/actions";
import { useParams } from "next/navigation";


type IndicatorProps = {
  answers?: AnswerResponse[];
  is_answered?: boolean;
}
const Indicator = ({ answers = [], is_answered = false }: IndicatorProps) => {
  if (is_answered && answers.some(x => x.is_correct && x.is_chosen))
    return <div className="bg-success w-9 mt-1 h-2 shadow rounded-lg" />;

  if (is_answered && answers?.some(x => x.is_chosen && !x.is_correct))
    return <div className="bg-destructive w-9 mt-1 h-2 shadow rounded-lg" />;

  return <div className="bg-primary w-9 mt-1 h-2 shadow rounded-lg" />;
};


export const QuizPagination = () => {
  const { id } = useParams<{ id: string }>();
  const quiz = useFetchQuiz(id);
  const question = useQuestion(quiz);
  if (!question) return <></>;
  return (
    <Pagination>
      <PaginationContent className="flex items-start pb-8">
        <div className="size-9">
          {question > 1 &&
            <PaginationItem>
              <PaginationPrevious href={`/quizes/${quiz.data?.id}?question=${question - 1}`} />
            </PaginationItem>
          }
        </div>

        {
          quiz.data?.questions.map((q, i) => <PaginationItem key={i + 1}>
            <PaginationLink
              href={`/quizes/${quiz.data?.id}?question=${i + 1}`}
              isActive={i + 1 === question}
            >
              {i + 1}
            </PaginationLink>
            <Indicator {...q} />
          </PaginationItem>)
        }
        <div className="size-9">
          {quiz.data?.questions && (question + 1 <= quiz.data.questions.length) &&
            <PaginationItem>
              <PaginationNext href={`/quizes/${quiz.data?.id}?question=${question + 1}`} />
            </PaginationItem>
          }
        </div>
      </PaginationContent>
    </Pagination>
  );
};