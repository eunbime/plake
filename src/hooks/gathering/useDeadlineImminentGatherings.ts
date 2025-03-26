import { queryOptions } from "@tanstack/react-query";
import dayjs from "dayjs";

import { QUERY_KEYS } from "@/constants/queryKeys";
import anonGatheringService from "@/services/gathering/AnonGatheringService";

export const deadlineImminentGatheringsQueryOption = () =>
  queryOptions({
    queryKey: [QUERY_KEYS.GATHERING.deadline],
    queryFn: async () => {
      const gatherings = await anonGatheringService.getGatheringList();
      return gatherings
        .filter(gathering =>
          dayjs(gathering.registrationEnd).isAfter(dayjs(new Date())),
        )
        .sort((a, b) => dayjs(a.registrationEnd).diff(dayjs(b.registrationEnd)))
        .slice(0, 10);
    },
  });
