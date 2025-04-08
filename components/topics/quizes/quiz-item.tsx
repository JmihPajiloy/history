import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChartColumnBig, Play } from "lucide-react";
import type { QuizByIDResponse } from "@/actions";
import { Skeleton } from "@/components/ui/skeleton";

type Props = Omit<QuizByIDResponse, "questions">;

export const QuizItemSkeleton = () => {
  return (
    <TableRow className="border-b border-gray-200 hover:bg-gray-50">
      <TableCell className="py-4">
        <Skeleton className="h-6 w-3/4" />
      </TableCell>
      <TableCell className="text-center">
        <Skeleton className="h-6 w-24 mx-auto" />
      </TableCell>
      <TableCell className="flex justify-center">
        <Skeleton className="h-10 w-28" />
      </TableCell>
    </TableRow>
  );
};

export const QuizItem = ({ id, title, is_completed }: Props) => {
  return (
    <TableRow className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <TableCell className="py-4 text-gray-800 font-medium text-base">
        {title}
      </TableCell>
      <TableCell className="text-center">
        {is_completed ? (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Пройден
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            Не пройден
          </span>
        )}
      </TableCell>
      <TableCell className="p-4">
        <div className="flex justify-center">
          <Button
            variant={is_completed ? "outline" : "default"}
            size="sm"
            asChild
            className={`font-medium ${
              is_completed
                ? "border-gray-300 hover:bg-gray-100 text-gray-700"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {is_completed ? (
              <Link
                href={`/quizes/${id}/stats`}
                className="flex items-center gap-2 px-4 py-2"
              >
                <ChartColumnBig className="h-4 w-4" />
                <span>Статистика</span>
              </Link>
            ) : (
              <Link
                href={`/quizes/${id}?question=1`}
                className="flex items-center gap-2 px-4 py-2"
              >
                <Play className="h-4 w-4" />
                <span>Пройти</span>
              </Link>
            )}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
