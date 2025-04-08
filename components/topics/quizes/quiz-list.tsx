"use client";

import { useFetchAllQuizes } from "@/hooks";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { QuizItem, QuizItemSkeleton } from "./quiz-item";
import { Skeleton } from "@/components/ui/skeleton";

export const QuizList = () => {
  const { isError, refetch, isLoading, isSuccess, data } = useFetchAllQuizes();
  if (isError) {
    return (
      <>
        Произошла ошибка, и нам не удалось получить список квизов
        <Button onClick={() => refetch()}>Обновить</Button>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <div className="flex justify-center max-w-[48rem] w-full">
          <Table>
            <TableCaption className="sr-only">Список квизов</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Skeleton className="w-fit"> Название</Skeleton>
                </TableHead>
                <TableHead className="text-center">
                  <Skeleton className="w-fit inline">Статус</Skeleton>
                </TableHead>
                <TableHead className="text-center">
                  <Skeleton className="w-fit inline">Действие</Skeleton>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <QuizItemSkeleton />
              <QuizItemSkeleton />
              <QuizItemSkeleton />
              <QuizItemSkeleton />
              <QuizItemSkeleton />
              <QuizItemSkeleton />
            </TableBody>
          </Table>
        </div>
      </>
    );
  }
  if (isSuccess) {
    return (
      <>
        <div className="flex justify-center max-w-[48rem] w-full">
          <Table>
            <TableCaption className="sr-only">Список квизов</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Название</TableHead>
                <TableHead className="text-center font-bold">Статус</TableHead>
                <TableHead className="text-center">Действие</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .sort((a, b) => Number(a.is_completed) - Number(b.is_completed))
                .map((quiz) => (
                  <QuizItem key={quiz.id} {...quiz} />
                ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
  }
};
