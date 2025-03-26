import { queryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import gatheringService from "@/services/gathering/GatheringService";

export const gatheringDetailQueryOption = (id: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS.GATHERING.detail(id)],
    queryFn: () => gatheringService.getGatheringDetail(id),
    throwOnError: true,
    retry: false,
  });
