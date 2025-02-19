"use client";

import { Button } from "@/components/ui/button";
import { login } from "@/app/actions";
import { useSession } from "next-auth/react";
import { LockKeyhole } from "lucide-react";


const Authorisation = () => {
  return (
    <div
      className="items-center flex flex-col gap-4 py-20">
      <LockKeyhole className="h-12 w-12" />
      <p className="text-center text-sm max-w-96">
        Чтобы пройти квизы, войдите в свой аккаунт VK.<br /> Так мы сможем учесть ваш результат в рейтинге
      </p>
      <Button className="w-80" onClick={() => login()}>Войти через VK</Button>
    </div>
  );
};

const QuizList = () => {
  return <>Квизов пока нет</>
}

export const Quizes = () => {
  const session = useSession();
  return (
    <section className="flex flex-col gap-4 items-center text-accent-foreground bg-accent rounded-t-3xl mt-10 p-10">
      <h2 className="font-bold pt-10 px-4 font-heading text-5xl scroll-mt-14"
          id="quizes">Квизы</h2>
      {
        (session.status !== "authenticated") ? <Authorisation /> : <QuizList/>
      }
    </section>
  );
};
