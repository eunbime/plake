import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { TReviewForm } from "@/schemas/reviewSchema";
import reviewService from "@/services/review/ReviewService";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createReview,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (data: TReviewForm) => {
      return reviewService.createReview(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.myList],
      });
    },
    onError: error => {
      console.error("모임 생성 실패:", error);
    },
  });

  const handleCreateReview = (data: TReviewForm) => {
    createReview(data);
  };

  return { handleCreateReview, isPending, isError };
};
