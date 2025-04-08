"use server";

import { QuizList } from "@/components/topics/quizes/quiz-list";
import { auth } from "../../../auth";
import { Authorization } from "./authorization";

export const Quizes = async () => {
  const session = await auth();
  return (
    <section className="flex flex-col gap-4 items-center mt-10 py-10 px-4 justify-center min-h-96">
      <h2
        className="font-heading font-extrabold py-6 text-2xl md:text-3xl lg:text-4xl text-center scroll-mt-16"
        id="quizes"
      >
        Квизы
      </h2>
      <div className="bg-gray-200/60 shadow-lg rounded-xl border border-gray-300 p-4 sm:p-6 w-full max-w-4xl">
        {session && session.user?.email ? <QuizList /> : <Authorization />}
      </div>
    </section>
  );
};
