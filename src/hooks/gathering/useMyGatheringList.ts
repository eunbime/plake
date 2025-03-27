import {
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { createClientGatheringService } from "@/services/gathering/GatheringService";
import { IMyGathering } from "@/types/gathering";

interface UseMyGatheringListProps {
  reviewedOnly?: boolean;
  token: string;
}

const myGatheringQueryOptions = (reviewedOnly: boolean, token: string) => ({
  queryKey: [QUERY_KEYS.GATHERING.myList, reviewedOnly],
  queryFn: ({ pageParam = 1 }) => {
    const gatheringService = createClientGatheringService(token);
    const limit = 10;
    const offset = (pageParam - 1) * limit;
    const params = `limit=${limit}&offset=${offset}`;
    return gatheringService.getMyGatheringList(reviewedOnly, params);
  },
  initialPageParam: 1,
  getNextPageParam: (lastPage: IMyGathering[], pages: IMyGathering[][]) => {
    return lastPage.length > 0 ? pages.length + 1 : undefined;
  },
  throwOnError: true,
  retry: false,
});

export const useMyGatheringList = ({
  reviewedOnly = false,
  token,
}: UseMyGatheringListProps) => {
  return useInfiniteQuery(myGatheringQueryOptions(reviewedOnly, token));
};

export const useSuspenseMyGatheringList = ({
  reviewedOnly = false,
  token,
}: UseMyGatheringListProps) => {
  return useSuspenseInfiniteQuery(myGatheringQueryOptions(reviewedOnly, token));
};
