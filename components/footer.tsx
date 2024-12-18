import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full py-4 border-t-2 sm:px-10">
      <Button asChild variant="link">
        <Link className="flex" href="https://github.com/JmihPajiloy/history">
          <Github className="mr-2" />
          <span>Проект на гитхабе</span>
        </Link>
      </Button>
    </footer>
  );
};