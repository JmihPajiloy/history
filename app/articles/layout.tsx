import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-4 px-48 grow">
      <div className="flex py-4">
        <Button variant="secondary" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2" /> На главную
          </Link>
        </Button>
      </div>
      {children}
    </main>
  );
};

export default Layout;