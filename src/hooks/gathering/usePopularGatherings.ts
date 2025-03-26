import { queryOptions } from "@tanstack/react-query";
import dayjs from "dayjs";

import { QUERY_KEYS } from "@/constants/queryKeys";
import anonGatheringService from "@/services/gathering/AnonGatheringService";

export const popularGatheringsQueryOption = () =>
  queryOptions({
    queryKey: [QUERY_KEYS.GATHERING.popular],
    queryFn: async () => {
      const gatherings = await anonGatheringService.getGatheringList();
      return gatherings
        .filter(gathering =>
          dayjs(gathering.registrationEnd).isAfter(dayjs(new Date())),
        )
        .sort((a, b) => b.participantCount - a.participantCount)
        .slice(0, 10);
    },
  });
