import type { MDXComponents } from 'mdx/types'
import { PropsWithChildren } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}: PropsWithChildren) => <h1 className="scroll-m-20 text-4xl font-extrabold font-heading tracking-tight lg:text-5xl pb-2">{children}</h1>
  }
}