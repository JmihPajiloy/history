"use client";

import React from "react";
import { RadioCard, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useQuiz } from "@/hooks";
//
// const Countdown = dynamic(() => import("@/components/countdown").then(mod => mod.Countdown), {
//   ssr: false,
//   loading: () => <CountdownFallback />
// });



const Page = () => {

  const { isError, isLoading, isQuestionValid } = useQuiz();

  if (isError || !isQuestionValid) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <main className="grow flex flex-col items-center ">
      <div className="flex w-96 justify-between items-center py-4">
        <h1 className="font-semibold text-lg">Вопрос #1</h1>
        {/*<Countdown period={100} end={DateTime.now().plus({*/}
        {/*  minutes: 10,*/}
        {/*  seconds: 10*/}
        {/*}).toISO()} />*/}
      </div>
      <p className="text-xl font-medium py-4 text-center">Когда началась Великая Отечественная война?</p>
      <div className="flex flex-col gap-2 p-4">
        <RadioGroup className="grid grid-cols-2">
          <RadioCard value="a" id="a">
            <Label htmlFor="a">22 июня 1940 года</Label>
          </RadioCard>
          <RadioCard value="b" id="b">
            <Label htmlFor="b">1 сентября 1939 года</Label>
          </RadioCard>
          <RadioCard value="c" id="c">
            <Label htmlFor="c">22 июня 1941 года</Label>
          </RadioCard>
          <RadioCard value="d" id="d">
            <Label htmlFor="d">7 ноября 1941 года</Label>
          </RadioCard>
        </RadioGroup>
        <Button className="my-4">Проверить ответ</Button>
      </div>
      <div className="flex justify-between items-center w-96 gap-2">
        <Button variant="outline">
          {/*<Link href={`/quizes/${id}?question=${searchParams.get("question") - 1}`}>*/}
          Предыдущий вопрос
          {/*</Link>*/}

        </Button>
        <Button variant="outline">Следующий вопрос</Button>
      </div>
    </main>
  );
};

export default Page;