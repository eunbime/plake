import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { createAuthService } from "@/services/auth/AuthService";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser } = useMutation({
    mutationFn: async (data: FormData) => {
      console.log(data, "api 요청 내부에서 출력");
      data.forEach((value, key) => {
        console.log(`🔹 ${key}:`, value);
      });
      const authService = await createAuthService();
      return authService.updateUser(data);
    },
    onSuccess: () => {
      console.log("프로필 업데이트 성공");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER.all],
      });
    },
    onError: () => {
      console.log("잠시 후 다시 시도해주세요.");
    },
  });

  const handleUpdateUser = (data: FormData) => {
    updateUser(data);
  };

  return { handleUpdateUser };
};
