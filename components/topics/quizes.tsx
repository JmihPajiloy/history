import Link from "next/link";
import { Button } from "@/components/ui/button";


export const Quizes = () => {
  return (
    <>
      <h2 className="font-bold pt-10 px-4 font-heading text-5xl scroll-mt-14" id="quizes">Квизы</h2>
      <p className="max-w-2xl text-lg font-light text-foreground pl-4">Пройдите квизы, чтобы проверить свои знания</p>
      <div className="flex gap-4 w-full h-[1000px] px-4 mt-6">
        <Button asChild>
          <Link href="/quizes/dates">Демо квиза</Link>
        </Button>
        <Button asChild>
          <Link href="/quizes">Демо регистрации в квизе</Link>
        </Button>
      </div>
    </>
  );
};
