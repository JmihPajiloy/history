"use client";

import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { login } from "@/app/actions";
import { Card } from "@/components/ui/card";

export const Authorization = () => {
  return (
    <Card
      className="items-center flex flex-col gap-4 p-8">
      <LockKeyhole className="h-12 w-12" />
      <p className="text-center text-sm max-w-96">
        Чтобы пройти квизы, войдите в свой аккаунт VK.<br /> Так мы сможем учесть ваш результат в рейтинге
      </p>
      <Button className="w-80" onClick={async () => login()}>Войти через VK</Button>
    </Card>
  );
};