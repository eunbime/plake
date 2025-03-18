import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import useModalStore from "@/stores/useModalStore";
import { APIError } from "@/types/error";

const TOKEN = "token";

const cancelGathering = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}/cancel`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new APIError(data.message, data.code, response.status);
  }

  return data;
};

export const useCancelGatheringMutation = (
  id: string,
  isOrganizer: boolean,
) => {
  const queryClient = useQueryClient();
  const { openAlert } = useModalStore();

  return useMutation({
    mutationFn: () => {
      return cancelGathering(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.all],
      });
    },
    onError: () => {
      const errorMessage = isOrganizer
        ? "취소에 실패했습니다."
        : "주최자가 아니면 취소할 수 없습니다.";
      openAlert(errorMessage);
    },
  });
};

export const useCancelGathering = (id: string, isOrganizer: boolean) => {
  const { mutate: cancelGathering } = useCancelGatheringMutation(
    id,
    isOrganizer,
  );

  const { openConfirm } = useModalStore();

  const handleCancelGathering = () => {
    openConfirm("정말 취소하시겠습니까?", () => {
      cancelGathering();
    });
  };

  return { handleCancelGathering };
};
