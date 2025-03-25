"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import "@tanstack/react-query";
import type { ErrorResponse } from "@/actions";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ErrorResponse;
  }
}
const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
};