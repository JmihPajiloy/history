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
import { RefreshCw } from "lucide-react";

export const QuizList = () => {
  const { isError, refetch, isLoading, isSuccess, data } = useFetchAllQuizes();

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <p className="text-gray-700 font-medium">
          Произошла ошибка, и нам не удалось получить список квизов
        </p>
        <Button onClick={() => refetch()} variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" /> Обновить
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full">
        <Table className="border-collapse">
          <TableCaption className="sr-only">Список квизов</TableCaption>
          <TableHeader className="bg-gray-200">
            <TableRow className="border-b-2 border-gray-300">
              <TableHead className="py-4 text-lg font-bold text-gray-800 w-1/2">
                Название
              </TableHead>
              <TableHead className="text-center text-lg font-bold text-gray-800 w-1/4">
                Статус
              </TableHead>
              <TableHead className="text-center text-lg font-bold text-gray-800 w-1/4">
                Действие
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <QuizItemSkeleton />
            <QuizItemSkeleton />
            <QuizItemSkeleton />
          </TableBody>
        </Table>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="w-full">
        <Table className="border-collapse">
          <TableCaption className="sr-only">Список квизов</TableCaption>
          <TableHeader className="bg-gray-200">
            <TableRow className="border-b-2 border-gray-300">
              <TableHead className="py-4 text-lg font-bold text-gray-800 w-1/2">
                Название
              </TableHead>
              <TableHead className="text-center text-lg font-bold text-gray-800 w-1/4">
                Статус
              </TableHead>
              <TableHead className="text-center text-lg font-bold text-gray-800 w-1/4">
                Действие
              </TableHead>
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
    );
  }
};
