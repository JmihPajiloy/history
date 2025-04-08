import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer
      className="w-full py-6 border-t-2 px-4 sm:px-10 relative"
      style={{
        backgroundImage: "url('/demo-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 relative z-10 max-w-screen-xl mx-auto">
        <Button asChild variant="link" className="text-base font-bold">
          <Link
            className="flex items-center"
            href="https://github.com/JmihPajiloy/history"
          >
            <Github className="mr-2 h-5 w-5" />
            <span>Проект на гитхабе</span>
          </Link>
        </Button>
        <div className="text-base font-bold">© Университет Итмо</div>
      </div>
    </footer>
  );
};
