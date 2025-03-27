import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <main className="grow flex flex-col items-center">{children}</main>;
}