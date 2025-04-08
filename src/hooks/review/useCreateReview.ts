import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { TReviewForm } from "@/schemas/reviewSchema";
import reviewService from "@/services/review/ReviewService";
import useModalStore from "@/stores/useModalStore";

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const openAlert = useModalStore(state => state.openAlert);

  const mutation = useMutation({
    mutationFn: (data: TReviewForm) => reviewService.createReview(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.myList],
      });
    },
    onError: () => {
      openAlert("리뷰 등록에 실패했습니다. 잠시 후 다시 시도해주세요.");
    },
  });

  const handleCreateReview = (data: TReviewForm) => {
    return mutation.mutateAsync(data);
  };

  return {
    handleCreateReview,
    isPending: mutation.isPending,
  };
};
