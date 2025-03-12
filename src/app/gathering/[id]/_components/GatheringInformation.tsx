import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import GatheringImage from "@/components/gathering-detail/GatheringImage";
import GatheringDetailInformation from "@/components/gathering-detail/GatheringInformation";
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
        <GatheringImage id={id} />
        <GatheringDetailInformation id={id} />
      </section>
    </HydrationBoundary>
  );
};

export default GatheringInformation;
