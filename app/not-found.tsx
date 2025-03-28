import type { Metadata } from "next";
import { CircleSlash2 } from "lucide-react";
import { BackToMainButton } from "@/components/back-to-main-button";
import { ShakingContainer } from "@/components/shaking-container";

export const metadata: Metadata = {
  title: "Страница не найдена"
};

const NotFound = () => {
  return (
    <main className="flex grow mx-auto flex-col items-center justify-center gap-2 w-56">
      <ShakingContainer>
        <CircleSlash2 className="size-20" />
      </ShakingContainer>
      <h2 className="mt-4 text-center font-semibold text-xl">Страница не найдена!</h2>
      <BackToMainButton className="w-full" />
    </main>
  );
};

export default NotFound;