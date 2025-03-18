import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import MainCardList from "@/components/layout/MainCardList";
import FilterTab from "@/components/navigations/FilterTab";
import MainCardListSkeleton from "@/components/skeletons/MainCardListSkeleton";
import { prefetchGateringList } from "@/hooks/gathering/useGatheringList";

const Page = async () => {
  const queryClient = new QueryClient();

  await prefetchGateringList(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="base-wrap">
        <Suspense>
          <FilterTab />
        </Suspense>
        <GatheringFilterSort />
        <FetchBoundary fallback={<MainCardListSkeleton />}>
          <MainCardList />
        </FetchBoundary>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
