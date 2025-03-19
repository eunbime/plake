"use client";

import { useRouter } from "next/navigation";

import useUserStore from "@/stores/useUserStore";
import { clearCookieOfToken } from "@/utils/cookieToken";

const useLogout = (toLoginPage: boolean = false) => {
  const { clearUserState } = useUserStore();
  const router = useRouter();

  const logout = () => {
    // 쿠키 삭제
    clearCookieOfToken();

    // 클라이언트 유저 상태 초기화
    clearUserState();

    // 로그인 페이지로 이동이 필요하다면 이동
    if (toLoginPage) router.push("/login");
  };

  return { logout };
};

export default useLogout;
