import FloatingBar from "@/components/gathering-detail/FloatingBar";

import GatheringInformation from "./_components/GatheringInformation";
import GatheringReview from "./_components/GatheringReview";

export default function GatheringDetailPage() {
  return (
    <div className="base-wrap">
      <article className="flex h-full flex-col gap-8 px-0 pt-5 md:px-20 md:pt-10">
        <GatheringInformation />
        <GatheringReview />
      </article>
      <FloatingBar />
    </div>
  );
}
