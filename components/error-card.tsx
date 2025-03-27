import { Card } from "@/components/ui/card";
import type { ErrorResponse } from "@/actions";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  error?: Omit<ErrorResponse, "type" | "status">
}>

export const ErrorCard = ({ error, children }:Props) => {
  return (
    <Card className="items-center flex flex-col gap-4 p-8 m-2">
      {children}
      <h1 className="text-xl font-semibold text-center">{error?.title ?? "Ошибка"}</h1>
      <p className="text-center text-sm max-w-56">
        {error?.details ?? "Упс... Что-то пошло не так"}
      </p>
    </Card>
  );
};