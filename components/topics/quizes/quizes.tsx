"use server";

import { auth } from "@/auth";
import { Authorization } from "@/components/topics/quizes/authorization";
import { QuizList } from "@/components/topics/quizes/quiz-list";

export const Quizes = async () => {
  const session = await auth();
  return (
    <section className="flex flex-col gap-4 items-center text-white overflow-hidden rounded-t-3xl mt-10 p-10 justify-center min-h-96 bg-gray-800">
      <h2
        className="font-heading font-extrabold py-10 text-3xl md:text-4xl lg:text-5xl text-center scroll-mt-16"
        id="quizes"
      >
        Квизы
      </h2>
      {!(session && session.user?.email) ? <Authorization /> : <QuizList />}
    </section>
  );
};
