import { MonoTypeOperatorFunction, Observable } from "rxjs";

export const complete = <T>(condition: (x: T) => boolean): MonoTypeOperatorFunction<T> => source => {
  return new Observable(observer => {
    const sub = source.subscribe({
      next: (x) => {
        if (condition(x)) {
          observer.complete();
        } else {
          observer.next(x);
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
    return () => sub.unsubscribe();
  });
};