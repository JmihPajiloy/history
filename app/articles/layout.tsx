import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Back = () => (
  <div className="flex py-4">
    <Button variant="secondary" asChild>
      <Link href="/">
        <ArrowLeft className="mr-2" /> На главную
      </Link>
    </Button>
  </div>
);

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-4 px-48 grow">
      <Back/>
      {children}
      <Back/>
    </main>
  );
};

export default Layout;