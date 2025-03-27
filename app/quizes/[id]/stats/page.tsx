"use client";

import { useFetchStats } from "@/hooks/use-fetch-stats";
import { useParams } from "next/navigation";
import { PersonalStats } from "@/components/stats/personal-stats";
import { GlobalStats } from "@/components/stats/global-stats";

const Page = () => {
  return (
    <div className="w-[52rem] p-8 flex flex-col gap-4">
      <PersonalStats />
      <GlobalStats />
    </div>
  );
};

export default Page;