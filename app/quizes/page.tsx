"use client";

import { useEffect, useRef, useState } from "react";
import { LoaderCircle, Signature } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { debounceTime, filter, map, Observable, share, tap } from "rxjs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


type InputData = {
  success: true, value: string
} | {
  success: false, error: string
}


const Page = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(" ");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const obs = new Observable<string>((observer) => {
      if (!ref.current) {
        observer.complete();
        return;
      }
      ref.current.oninput = () => {
        observer.next(ref.current?.value);
      };
      return () => {
        if (ref.current) ref.current.oninput = null;
      };
    }).pipe(
      tap(() => setLoading(true)),
      debounceTime(250),
      map<string, InputData>(x => {
        if (x.trim().length < 3) return {
          success: false,
          error: "Минимальная длина ника - 3 символа!"
        };
        if (x.trim().length > 20) return {
          success: false,
          error: "Максимальная длина ника - 20 символов!"
        };
        if (!x.trim().match(/^[a-zA-Zа-яА-Я0-9_]+$/)) return {
          success: false,
          error: "Ник может содержать только русские и латинские буквы, цифры и символ _"
        };
        return {
          success: true,
          value: x
        };
      }),
      tap(() => setLoading(false)),
      share()
    );

    const onSuccess = obs.pipe(
      filter(x => x.success),
      map(x => x.value)
    ).subscribe(x => {
      setLoading(false);
      setError("");
      toast(x);
    });

    const onError = obs.pipe(
      filter(x => !x.success),
      map(x => x.error)
    ).subscribe(err => {
      setError(err);
    });

    return () => {
      onSuccess.unsubscribe();
      onError.unsubscribe();
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center grow">

      <form
        className="items-center flex flex-col gap-2">
        <Signature className="size-10" />
        <h1 className="text-xl font-bold">Введите никнейм</h1>
        <p className="text-center text-sm">
          Так мы сможем учесть ваш результат в статистике
        </p>
        <Label htmlFor="nickname" className="flex w-80 font-inter ">Никнейм</Label>
        <Input className="w-80" ref={ref} type="text" name="nickname" placeholder="Петр I" />

        <p className="text-destructive font-medium h-12 text-sm flex items-start w-80">{error}</p>
        <Button className="w-80" disabled={loading || !!error}>
          {
            loading
              ? <LoaderCircle className="animate-spin " />
              : <>Отправить</>
          }
        </Button>
      </form>
    </main>
  );
};

export default Page;