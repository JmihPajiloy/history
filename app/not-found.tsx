import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleSlash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Страница не найдена"
}

const NotFound = () => {
  return (
    <main className="flex items-center grow justify-center flex-col">
      {/*<h1 className="font-semibold font-mono text-8xl py-8">#404 :(</h1>*/}
      <CircleSlash2 size={96} absoluteStrokeWidth />
      <div>
        <p className="font-semibold font-inter text-lg pt-4">Страница не найдена</p>
        <Button asChild className="mt-4 mb-2 w-full font-inter">
          <Link href="/">
            На главную
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;