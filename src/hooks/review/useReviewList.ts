import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { IReview } from "@/types/review";

const getReviewList = async (): Promise<IReview[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.data;
};

export const useReviewList = () => {
  try {
    return useInfiniteQuery<IReview[]>({
      queryKey: [QUERY_KEYS.REVIEW.list],
      queryFn: getReviewList,
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length > 0 ? pages.length + 1 : undefined;
      },
      select: data => ({
        pages: data.pages,
        pageParams: data.pageParams,
      }),
    });
  } catch (error) {
    throw error;
  }
};

export const prefetchReviewList = async (queryClient: QueryClient) => {
  try {
    return queryClient.prefetchInfiniteQuery({
      queryKey: [QUERY_KEYS.REVIEW.list],
      queryFn: getReviewList,
      initialPageParam: 1,
    });
  } catch (error) {
    throw error;
  }
};
