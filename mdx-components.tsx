import type { MDXComponents } from 'mdx/types'
import { PropsWithChildren } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}: PropsWithChildren) => <h1 className="scroll-m-20 text-4xl font-extrabold font-heading tracking-tight lg:text-5xl pb-2">{children}</h1>,
    h2: ({children}: PropsWithChildren) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-heading tracking-tight first:mt-0">{children}</h2>,
    h3: ({children}: PropsWithChildren) => <h3 className="scroll-m-20 text-2xl font-heading tracking-tight">{children}</h3>,
    h4: ({children}: PropsWithChildren) => <h4 className="scroll-m-20 text-xl font-heading tracking-tight">{children}</h4>,
    p: ({children}: PropsWithChildren) => <p className="text-xl text-muted-foreground">{children}</p>,
    ul: ({children}: PropsWithChildren) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
    img: ({children}: PropsWithChildren) => <>То что вернуть</>
  }
}
