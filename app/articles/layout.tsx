import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Back = () => {
  return (
    <div className="flex py-4">
      <Button variant="default" asChild>
        <Link href="/">
          <ArrowLeft className="mr-1" />
          На главную
        </Link>
      </Button>
    </div>
  );
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-4 grow flex flex-col items-center">
      <div className="max-w-[48rem] mx-4 gap-4">
        <Back />
        {children}
        <Back />
      </div>
    </main>
  );
};

export default Layout;