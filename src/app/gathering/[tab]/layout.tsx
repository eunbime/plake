import { Suspense } from "react";

import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import FilterTab from "@/components/navigations/FilterTab";

import Banner from "./_components/Banner";

const GatheringLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="base-wrap">
        <Banner />
        <Suspense>
          <FilterTab />
        </Suspense>
        <hr className="my-4 border-gray-200" />
        <GatheringFilterSort />
        {children}
      </div>
    </>
  );
};

export default GatheringLayout;
