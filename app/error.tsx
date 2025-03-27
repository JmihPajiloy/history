"use client";

import { Button } from "@/components/ui/button";
import { CircleAlert, RotateCcw, Undo2 } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
}
export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex grow mx-auto flex-col items-center justify-center gap-2 w-56">
      <CircleAlert className="size-20 mb-4" />
      <h2 className="text-center font-semibold text-xl">Что-то пошло не так!</h2>
      <Button variant="outline" className="w-full" onClick={() => reset()}>
        Попробовать еще раз <RotateCcw className="ml-2 size-4 " />
      </Button>
      <Button className="w-full group" asChild>
        <Link href="/">
          Вернуться на главную <Undo2 className="ml-2 size-4" />
        </Link>
      </Button>
    </main>
  );
}