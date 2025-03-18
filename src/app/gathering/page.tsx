import { Suspense } from "react";

import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import MainCardList from "@/components/layout/MainCardList";
import FilterTab from "@/components/navigations/FilterTab";

const Page = () => {
  return (
    <div className="base-wrap">
      <Suspense>
        <FilterTab />
      </Suspense>
      <GatheringFilterSort />
      <MainCardList />
    </div>
  );
};

export default Page;
