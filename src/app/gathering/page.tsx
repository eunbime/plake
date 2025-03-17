import { Suspense } from "react";

import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import MainCardList from "@/components/layout/MainCardList";

import FilterTabWrapper from "./_component/FilterTab";

const Page = () => {
  return (
    <div className="base-wrap">
      <Suspense>
        <FilterTabWrapper />
      </Suspense>
      <GatheringFilterSort />
      <MainCardList />
    </div>
  );
};

export default Page;
