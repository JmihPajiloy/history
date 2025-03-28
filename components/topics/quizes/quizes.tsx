"use server";

import { auth } from "@/auth";
import { Authorization } from "@/components/topics/quizes/authorization";
import { QuizList } from "@/components/topics/quizes/quiz-list";


export const Quizes = async () => {
  const session = await auth();
  return (
    <section
      className="flex flex-col gap-4 items-center text-accent-foreground overflow-hidden rounded-t-3xl mt-10 p-10  justify-center min-h-96">
      <h2 className="font-bold pt-10 px-4 font-heading text-5xl scroll-mt-14"
          id="quizes">Квизы</h2>
      {
        !(session && session.user?.email) ? <Authorization /> : <QuizList />
      }

    </section>
  );
};



