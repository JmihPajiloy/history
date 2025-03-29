import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChartColumnBig, Play } from "lucide-react";
import type { QuizByIDResponse } from "@/actions";
import { Skeleton } from "@/components/ui/skeleton";

type Props = Omit<QuizByIDResponse, "questions">

export const QuizItemSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <Skeleton className="w-fit">Строительство малоэтажек в послевоенном Ленинграде</Skeleton>
      </TableCell>
      <TableCell className="text-center">
        <Skeleton className="w-fit">Пройден</Skeleton>
      </TableCell>
      <TableCell className="flex justify-center">
        <Skeleton className="sm:w-28 w-9 h-9 shrink-0" />
      </TableCell>
    </TableRow>
  );
};

export const QuizItem = ({ id, title, is_completed }: Props) => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        {title}
      </TableCell>
      <TableCell className="text-center">
        {is_completed ? <>Пройден</> : <>Не пройден</>}
      </TableCell>
      <TableCell className="flex justify-center">
        <Button variant={is_completed ? "outline" : "default"} asChild className="sm:w-28 w-9 shrink-0">
          {
            is_completed
              ? <Link href={`/quizes/${id}/stats`}>
                <span className="sm:not-sr-only sr-only">Статистика</span>
                <ChartColumnBig className="sm:sr-only not-sr-only size-4" />
              </Link>
              : <Link href={`/quizes/${id}?question=1`}>
                <span className="sm:not-sr-only sr-only">Пройти</span>
                <Play className="sm:sr-only not-sr-only size-4" />
              </Link>
          }
        </Button>
      </TableCell>
    </TableRow>
  );
};