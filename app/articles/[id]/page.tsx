import { MDXRemote } from "next-mdx-remote/rsc";
import { fetchArticle } from "@/actions";
import { notFound } from "next/navigation";
import type { AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";
import Image, { type ImageProps } from "next/image";
import { Link as LinkIcon } from "lucide-react";
import { BackToMainButton } from "@/components/back-to-main-button";

type Props = { params: { id: string } }
const Page = async ({ params: { id } }: Props) => {
  try {
    if (isNaN(Number(id))) notFound();
    const [data, err] = await fetchArticle(id);
    if (err || !data.markdown) notFound();
    return (
      <div className="max-w-[48rem] mx-4 gap-4">
        <div className="flex justify-between items-center mb-4">
          <BackToMainButton />
          {data?.author && <p className="italic text-muted-foreground text-sm">Автор: {data?.author}</p>}
        </div>
        <MDXRemote source={data?.markdown} components={{
          h1: ({ children }: PropsWithChildren) => <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-2 mt-8">{children}</h1>,
          h2: ({ children }: PropsWithChildren) => <h2
            className="scroll-m-20 border-b pb-2 text-3xl font-semibold font-heading tracking-tight first:mt-0 mt-8">{children}</h2>,
          h3: ({ children }: PropsWithChildren) => <h3
            className="scroll-m-20 text-2xl font-heading font-semibold tracking-tight mt-8">{children}</h3>,
          h4: ({ children }: PropsWithChildren) => <h4
            className="scroll-m-20 text-xl font-heading font-semibold tracking-tight mt-8">{children}</h4>,
          p: ({ children }: PropsWithChildren) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
          ul: ({ children }: PropsWithChildren) => <ul
            className="my-6 ml-6 font-sans list-disc [&>li]:mt-2">{children}</ul>,
          img: ({ src = "", alt = "", ...props }) => (
            <>
        <span
          className="flex items-center justify-center py-4 relative rounded-lg h-80 overflow-hidden">
        <Image {...(props as ImageProps)} fill src={src} alt={alt} className="absolute object-contain rounded-lg" />
      </span>
              <span
                className="block text-muted-foreground font-sans text-xs mt-2 italic text-center w-full ">{alt}</span>
            </>
          ),
          blockquote: ({ children }: PropsWithChildren) => (
            <blockquote
              className="mt-6 bg-muted/50 text-foreground border rounded-lg flex flex-col gap-2 items-center justify-center px-4 py-3 italic [&_p]:leading-relaxed"
            >
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-2" />,
          a: ({
                children,
                href = ""
              }: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
            <a href={href}
               className="text-muted-foreground bg-muted font-medium w-fit px-2 py-0.5 rounded-md hover:opacity-50 translate-y-[0.1875rem] transition duration-200 font-sans underline-offset-4 hover:underline inline-flex items-center">
              <LinkIcon className="mr-2 h-4 w-4 shrink-0" />
              {children || new URL(href).hostname}
            </a>
          )
        }} />
        <BackToMainButton className="mt-4" />
      </div>
    );
  } catch {
    notFound()
  }
};

export default Page;