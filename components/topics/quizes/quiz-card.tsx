"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { QuizByIDResponse } from "@/actions";
import Link from "next/link";

export const QuizCardSkeleton = () => {
  return (
    <Skeleton
      className="w-full max-w-128 sm:w-128 h-[4.25rem] sm:justify-start justify-between p-4 flex flex-row gap-4 rounded-xl ">
      <div className="flex-grow" />
      <div className="w-24" />
    </Skeleton>
  );
};

type Props = Omit<QuizByIDResponse, "questions">

export const QuizCard = ({ is_completed = false, description, title, id }: Props) => {
  return (
    <Card
      className="sm:w-128 w-full justify-between items-center p-4 rounded-2xl flex overflow-hidden">
      <div className={`flex flex-col flex-grow ${is_completed ? "text-muted-foreground line-through opacity-50" : ""}`}>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-muted-foreground sm:flex hidden">{description}</p>
      </div>
      <Button variant={is_completed ? "outline" : "default"} asChild className="w-28">
        {
          is_completed
            ? <Link href={`/quizes/${id}/stats`}>Статистика</Link>
            : <Link href={`/quizes/${id}?question=1`}>Пройти</Link>
        }
      </Button>
    </Card>
  );
};