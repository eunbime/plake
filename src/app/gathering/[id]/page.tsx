import { Suspense } from "react";

import FloatingBar from "@/components/gathering-detail/FloatingBar";
import GatheringImageSkeleton from "@/components/skeletons/gathering-detail/GatheringImageSkeleton";
import GatheringInformationSkeleton from "@/components/skeletons/gathering-detail/GatheringInformationSkeleton";
import GatheringReviewSkeleton from "@/components/skeletons/gathering-detail/GatheringReviewSkeleton";

import GatheringInformation from "./_components/GatheringInformation";
import GatheringReviewBoard from "./_components/GatheringReviewBoard";

export default function GatheringDetailPage() {
  const id = "2196"; // 임시 params id

  return (
    <div className="base-wrap bg-gray-50">
      <article className="flex h-full flex-col gap-8 px-0 pt-5 md:px-20 md:pt-10">
        <Suspense
          fallback={
            <div className="flex w-full flex-col gap-10 md:flex-row">
              <GatheringImageSkeleton />
              <GatheringInformationSkeleton />
            </div>
          }
        >
          <GatheringInformation id={id} />
        </Suspense>
        <Suspense fallback={<GatheringReviewSkeleton />}>
          <GatheringReviewBoard />
        </Suspense>
      </article>
      <FloatingBar id={id} />
    </div>
  );
}
