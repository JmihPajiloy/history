import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackToMain = () => {
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