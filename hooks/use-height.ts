"use client";

import { type RefObject, useEffect, useRef, useState } from "react";
import { fromEvent, startWith } from "rxjs";


const measure = <T extends HTMLElement>(ref: RefObject<T>) => ref.current?.getBoundingClientRect().height;

export function useHeight<T extends HTMLElement>(fallback?: number): [RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [height, setHeight] = useState<number>(measure(ref) ?? fallback ?? 0);

  useEffect(() => {
    if (!ref.current) return;
    const sub = fromEvent(ref.current, "resize")
      .pipe(startWith(null))
      .subscribe(() => setHeight(measure(ref) ?? fallback ?? 0));
    return () => sub.unsubscribe();
  }, []);

  return [ref, height];
}


