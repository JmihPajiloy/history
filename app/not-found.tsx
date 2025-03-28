import type { Metadata } from "next";
import { CircleSlash2 } from "lucide-react";
import { BackToMainButton } from "@/components/back-to-main-button";

export const metadata: Metadata = {
  title: "Страница не найдена"
};

const NotFound = () => {
  return (
    <main className="flex grow mx-auto flex-col items-center justify-center gap-2 w-56">
      <CircleSlash2 className="size-20 mb-4" />
      <h2 className="text-center font-semibold text-xl">Страница не найдена!</h2>
      <BackToMainButton className="w-full" />
    </main>
  );
};

export default NotFound;