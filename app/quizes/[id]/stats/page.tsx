"use client";

import { PersonalStats } from "@/components/stats/personal-stats";
import { GlobalStats } from "@/components/stats/global-stats";

const Page = () => {
  return (
    <div className="max-w-[52rem] p-8 flex flex-col gap-4">
      <PersonalStats />
      <GlobalStats />
    </div>
  );
};

export default Page;