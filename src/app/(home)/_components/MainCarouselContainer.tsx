import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import MainCarouselSkeleton from "@/components/skeletons/MainCarouselSkeleton";
import { deadlineImminentGatheringsQueryOption } from "@/hooks/gathering/useDeadlineImminentGatherings";
import { popularGatheringsQueryOption } from "@/hooks/gathering/usePopularGatherings";

import DeadLineCarousel from "./DeadLineCarousel";
import PopularCarousel from "./PopularCarousel";

const MainCarouselContainer = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(popularGatheringsQueryOption()),
    queryClient.prefetchQuery(deadlineImminentGatheringsQueryOption()),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col gap-20">
        <FetchBoundary fallback={<MainCarouselSkeleton />}>
          <PopularCarousel />
        </FetchBoundary>
        <FetchBoundary fallback={<MainCarouselSkeleton />}>
          <DeadLineCarousel />
        </FetchBoundary>
      </section>
    </HydrationBoundary>
  );
};

export default MainCarouselContainer;
