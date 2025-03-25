"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { QuizByIDResponse } from "@/actions/utils";
import Link from "next/link";

export const QuizCardSkeleton = () => {
  return (
    <Skeleton
      className="w-full max-w-128 sm:w-128 h-[4.25rem] sm:justify-start justify-between p-4 flex flex-row gap-4 sm:h-36 rounded-xl ">
      <div className="w-28 hidden md:block shrink-0" />
      <div className="flex-grow" />
      <div className="w-24" />
    </Skeleton>
  );
};

type Props = Omit<QuizByIDResponse, "questions">

export const QuizCard = ({ is_completed = false, description, preview_photo, title, id}: Props) => {
  return (
    <Card
      className="sm:w-128 w-full sm:h-36 sm:justify-start justify-between p-4 gap-4 rounded-2xl flex relative overflow-hidden">
      <div className="relative w-28 h-28 hidden md:block shrink-0">
        {preview_photo && <Image src={preview_photo} alt="illustration" fill className="bg-center object-cover rounded-lg" />}
      </div>
      <div className={`flex flex-col flex-grow ${is_completed ? "text-muted-foreground line-through opacity-50" : ""}`}>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-muted-foreground sm:flex hidden">{description}</p>
      </div>
      <div className="flex flex-col justify-between w-24 shrink-0">
        <Button variant="default" className={is_completed ? "hidden" : ""} asChild>
          <Link href={`/quizes/${id}?question=1`}>
            Пройти!
          </Link>

        </Button>
      </div>
      {/*<div className="h-2 bg-accent-foreground absolute left-0 bottom-0 rounded-r-full transition duration-300 ease-in-out" style={{ width: `${(progress * 100)}%` }} />*/}
    </Card>
  );
};