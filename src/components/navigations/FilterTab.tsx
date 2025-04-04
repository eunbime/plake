"use client";

import { usePathname } from "next/navigation";

import MainTab from "@/components/navigations/MainTab";
import SubTab from "@/components/navigations/SubTab";

const FilterTab = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <MainTab pathname={pathname} />
      <SubTab pathname={pathname} />
    </div>
  );
};

export default FilterTab;
