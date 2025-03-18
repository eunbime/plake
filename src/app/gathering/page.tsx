import { Suspense } from "react";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import MainCardList from "@/components/layout/MainCardList";
import FilterTab from "@/components/navigations/FilterTab";
import MainCardListSkeleton from "@/components/skeletons/MainCardListSkeleton";

const Page = () => {
  return (
    <div className="base-wrap">
      <Suspense>
        <FilterTab />
      </Suspense>
      <GatheringFilterSort />
      <FetchBoundary fallback={<MainCardListSkeleton />}>
        <MainCardList />
      </FetchBoundary>
    </div>
  );
};

export default Page;
