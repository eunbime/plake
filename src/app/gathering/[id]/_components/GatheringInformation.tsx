import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

import GatheringImage from "@/components/gathering-detail/GatheringImage";
import GatheringDetailInformation from "@/components/gathering-detail/GatheringInformation";
import GatheringImageSkeleton from "@/components/skeletons/gathering-detail/GatheringImageSkeleton";
import GatheringInformationSkeleton from "@/components/skeletons/gathering-detail/GatheringInformationSkeleton";
import { prefetchGatheringDetail } from "@/hooks/gathering/useGatheringDetail";

interface IGatheringInformationProps {
  id: string;
}

const GatheringInformation = async ({ id }: IGatheringInformationProps) => {
  const queryClient = new QueryClient();

  await prefetchGatheringDetail(id, queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex w-full flex-col gap-10 md:flex-row">
        <Suspense fallback={<GatheringImageSkeleton />}>
          <GatheringImage id={id} />
        </Suspense>
        <Suspense fallback={<GatheringInformationSkeleton />}>
          <GatheringDetailInformation id={id} />
        </Suspense>
      </section>
    </HydrationBoundary>
  );
};

export default GatheringInformation;
