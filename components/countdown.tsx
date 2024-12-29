"use client";
import { CSSProperties, useEffect, useState } from "react";
import { interval, map, startWith } from "rxjs";
import { toast } from "sonner";
import { DateTime, Interval } from "luxon";
import { complete } from "@/utils";
import { animated, config, useReducedMotion, useSpringRef, useTransition } from "@react-spring/web";
import { Skeleton } from "@/components/ui/skeleton";


export type CountdownDigitProps = {
  value: string;
}

type TransitionState = {
  opacity: CSSProperties["opacity"]
  transform: CSSProperties["transform"]
  position: CSSProperties["position"]
}

export const CountdownDigit = ({ value }: CountdownDigitProps) => {
  const transRef = useSpringRef();
  const reducedMotion = useReducedMotion();

  const transitions = useTransition(value, {
    ref: transRef,
    keys: null,
    immediate: reducedMotion ?? false,
    from: { opacity: 0, transform: "translate3d(0,150%,0)", position: "absolute" } satisfies TransitionState,
    enter: { opacity: 1, transform: "translate3d(0,0%,0)", position: "relative" } satisfies TransitionState,
    leave: { opacity: 0, transform: "translate3d(0,-150%,0)", position: "absolute" } satisfies TransitionState,
    config: config.wobbly
  });

  useEffect(() => {
    transRef.start();
  }, [value, transRef]);


  return transitions((style, item) => (
    <div className="relative flex">
      <animated.div style={style}>{item}</animated.div>
    </div>
  ));
};

// const CountdownProvider = ({ period, end }: { period: number, end: string }) => {
//   const [count, setCount] = useState<Duration>(
//     Interval.fromDateTimes(DateTime.now(), DateTime.fromISO(end)).toDuration()
//   );
//
//   const observable = interval(period)
//     .pipe(
//       startWith(null),
//       map(() => Interval.fromDateTimes(DateTime.now(), DateTime.fromISO(end))),
//       complete(int => (!int.isValid && int.invalidReason === "end before start") || int.isEmpty()),
//       map(int => int.toDuration()),
//       share()
//     );
//
//   useEffect(() => {
//     const sub = observable.subscribe({
//       next: remains => setCount(remains),
//       error: (err: unknown) => {
//         console.error(err);
//
//       }
//     });
//
//     return () => sub.unsubscribe();
//   }, [end, period, setCount]);
// };

export const Countdown = ({ period, end }: { period: number, end: string }) => {
  const [count, setCount] = useState<string>("--:--:--");

  useEffect(() => {
    const sub = interval(period)
      .pipe(
        startWith(null),
        map(() => Interval.fromDateTimes(DateTime.now(), DateTime.fromISO(end))),
        complete(int => (!int.isValid && int.invalidReason === "end before start") || int.isEmpty()),
        map(int => int.toDuration().plus({ seconds: 1 }).toFormat("hh:mm:ss", { floor: true }))
      )
      .subscribe({
        next: remains => setCount(remains),
        error: (err: unknown) => {
          setCount("--:--:--");
          console.error(err);
          toast("Таймер сломался!", {
            description: (err instanceof Error)
              ? (
                <pre className="font-mono block rounded-md bg-muted text-muted-foreground">
                  {err.name}: {err.message}
                </pre>
              ) : null
          });
        },
        complete: () => {
          toast("Таймер завершен");
          setCount("00:00:00");
        }
      });

    return () => sub.unsubscribe();
  }, [end, period, setCount]);

  return (
    <div
      className="flex select-none text-xl w-fit h-fit px-4 py-3 bg-muted text-foreground font-mono font-medium border rounded-lg shadow overflow-hidden">
      {
        Array.from(count).map((x, index) => (
          <CountdownDigit value={x} key={index} />
        ))
      }
    </div>
  );
};

export const CountdownFallback = () => <Skeleton
  className="rounded-lg px-[calc(1rem+1px)] py-[calc(0.75rem+1px)] w-fit h-fit text-xl font-mono font-medium shadow">00:00:00</Skeleton>;

