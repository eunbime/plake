import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { createGatheringService } from "@/services/gathering/GatheringService";
import useModalStore from "@/stores/useModalStore";

export const useCreateGathering = () => {
  const queryClient = useQueryClient();
  const openAlert = useModalStore(state => state.openAlert);

  const { mutate: createGathering, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      const service = await createGatheringService();
      return service.createGathering(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GATHERING.all],
      });
    },
    onError: error => {
      console.error("모임 생성 실패:", error);
      openAlert("모임 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
    },
  });

  const handleCreateGathering = (data: FormData) => {
    createGathering(data);
  };

  return { handleCreateGathering, isPending };
};
