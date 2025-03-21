import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import { prefetchDeadlineImminentGatherings } from "@/hooks/gathering/useDeadlineImminentGatherings";
import { prefetchPopularGatherings } from "@/hooks/gathering/usePopularGatherings";

import MainCarousel from "./MainCarousel";

const MainCarouselContainer = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    prefetchPopularGatherings(queryClient),
    prefetchDeadlineImminentGatherings(queryClient),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col gap-20">
        <FetchBoundary fallback={<div>Loading...</div>}>
          <MainCarousel type="popular" />
        </FetchBoundary>
        <FetchBoundary fallback={<div>Loading...</div>}>
          <MainCarousel type="deadline" />
        </FetchBoundary>
      </section>
    </HydrationBoundary>
  );
};

export default MainCarouselContainer;
