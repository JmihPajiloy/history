"use client"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import type { PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient()

export const Providers = ({children}: PropsWithChildren) => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
    <Toaster/>
    </>
  )
}