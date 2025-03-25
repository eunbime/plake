import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { prefetchGatheringDetail } from "@/hooks/gathering/useGatheringDetail";
import { prefetchReviewsByGatheringId } from "@/hooks/review/useReviewsByGatheringId";

import FloatingBar from "./_components/FloatingBar";
import GatheringInformation from "./_components/GatheringInformation";
import GatheringReviewBoard from "./_components/GatheringReviewBoard";

interface GatheringDetailPageProps {
  params: {
    id: string;
  };
}

export default async function GatheringDetailPage({
  params,
}: GatheringDetailPageProps) {
  const { id } = params;

  const queryClient = new QueryClient();

  await Promise.all([
    prefetchGatheringDetail(id, queryClient),
    prefetchReviewsByGatheringId(id, queryClient),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="base-wrap bg-gray-50">
        <article className="flex h-full flex-col gap-8 px-0 pt-5 md:px-20 md:pt-10">
          <GatheringInformation id={id} />
          <GatheringReviewBoard />
        </article>
        <FloatingBar id={id} />
      </div>
    </HydrationBoundary>
  );
}
