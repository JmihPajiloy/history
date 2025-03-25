"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { useCurrentQuiz, useQuestion } from "@/hooks";
import type { QuestionResponse } from "@/actions";


type IndicatorProps = QuestionResponse
const Indicator = ({ answers = [], is_answered }: IndicatorProps) => {
  console.log("rererererererrender")
  if (is_answered && answers.some(x => x.is_correct))
    return <div className="bg-success w-9 mt-1 h-2 shadow rounded-lg" />;

  if (is_answered && answers?.every(x => x.is_correct == false))
    return <div className="bg-destructive w-9 mt-1 h-2 shadow rounded-lg" />;

  return <div className="bg-primary w-9 mt-1 h-2 shadow rounded-lg" />;
};


export const QuizPagination = () => {
  const quiz = useCurrentQuiz();
  const question = useQuestion(quiz)
  if (!question) return <></>;
  return (
    <Pagination>
      <PaginationContent className="flex items-start">
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