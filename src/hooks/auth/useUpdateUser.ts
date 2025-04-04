import { useMutation } from "@tanstack/react-query";

import authService from "@/services/auth/AuthService";
import useModalStore from "@/stores/useModalStore";
import useUserStore from "@/stores/useUserStore";
import { APIError } from "@/types/error";

export const useUpdateUser = () => {
  const { user, updateUserState } = useUserStore();
  const openAlert = useModalStore(state => state.openAlert);

  const { mutate: updateUser } = useMutation({
    mutationFn: async (data: FormData) => {
      return await authService.updateUser(data);
    },
    onSuccess: data => {
      if (!user) return;

      updateUserState({
        ...data,
        teamId: user.teamId,
      });
    },
    onError: error => {
      const message =
        error instanceof APIError
          ? error.message
          : "알 수 없는 오류가 발생했어요.";

      openAlert(message);
    },
  });

  return { handleUpdateUser: updateUser };
};
