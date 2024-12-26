"use client";
import { createContext, type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { interval, map, startWith } from "rxjs";
import { toast } from "sonner";
import { DateTime, Interval } from "luxon";
import { complete } from "@/utils";
import { animated, config, type TransitionFn, useSpringRef, useTransition } from "@react-spring/web";

type useNumberAnimationReturnParams = [
  TransitionFn<string, {
    transform: string,
    position: string
    opacity: number
  }>,
  Dispatch<SetStateAction<string>>
]

const useNumberAnimation = (target: string): useNumberAnimationReturnParams => {
  const [index, setIndex] = useState(target);
  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(0,150%,0)", position: "absolute" },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)", position: "relative" },
    leave: { opacity: 0, transform: "translate3d(0,-150%,0)", position: "absolute" },
    config: config.wobbly
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);
  return [transitions, setIndex];
};


const useAnimations = (value: string): [Array<TransitionFn<string, {
  transform: string,
  position: string
  opacity: number
}>>, (val: string) => void] => {
  const [val1, set0] = useNumberAnimation(value[0]);
  const [val2, set1] = useNumberAnimation(value[1]);
  const [val3, set2] = useNumberAnimation(value[2]);
  const [val4, set3] = useNumberAnimation(value[3]);
  const [val5, set4] = useNumberAnimation(value[4]);
  const [val6, set5] = useNumberAnimation(value[5]);
  const [val7, set6] = useNumberAnimation(value[6]);
  const [val8, set7] = useNumberAnimation(value[7]);

  return [
    [val1, val2, val3, val4, val5, val6, val7, val8],
    (val) => {
      set0(val[0]);
      set1(val[1]);
      set2(val[2]);
      set3(val[3]);
      set4(val[4]);
      set5(val[5]);
      set6(val[6]);
      set7(val[7]);
    }
  ];
};

const CountdownContext = createContext({
  countdown: "--:--:--",
  transitions: [],
  setCountdown: () => {
  }
});

export const Countdown = ({ period, end }: { period: number, end: string }) => {
  const [count, setCount] = useAnimations("00:00:00");

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
          if (err instanceof Error) {
            toast("Таймер сломался!", {
              description: <code
                className="font-mono block rounded-md bg-muted text-muted-foreground">{err.name}: {err.message}</code>
            });
          }
        },
        complete: () => {
          toast("Таймер завершен")
          setCount("00:00:00");
        }
      });

    return () => sub.unsubscribe();
  }, [end, period, setCount]);


  return (
    <div
      className="flex select-none text-xl w-fit h-fit px-4 py-3 bg-muted text-foreground  font-mono font-medium border rounded-lg shadow overflow-hidden">
      {
        count.map((x, index) => x((style, item) => (
          <div key={index} className="relative flex">
            {/*
            // @ts-ignore */}
            <animated.div style={style}>{item}</animated.div>
          </div>
        )))
      }
    </div>
  );
};