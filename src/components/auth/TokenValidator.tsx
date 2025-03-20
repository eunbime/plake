"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import useLogout from "@/hooks/useLogout";
import useModalStore from "@/stores/useModalStore";
import useUserStore from "@/stores/useUserStore";
import { getCookieOfToken } from "@/utils/cookieToken";

// 모달 상태 추적을 위한 모듈 레벨 변수 (모든 컴포넌트 인스턴스 간에 공유)
let isModalShowing = false;

const TokenValidator = () => {
  const router = useRouter();
  const { logout } = useLogout();
  const { openAlert } = useModalStore();
  const { isLoggedIn } = useUserStore();
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // 로그아웃 처리 함수
  const handleLogout = useCallback(() => {
    // 전역 변수를 사용하여 모달이 이미 표시되는지 확인
    if (isModalShowing) {
      return;
    }

    // 모달 표시 상태 설정
    isModalShowing = true;

    // 로그아웃 및 리디렉션
    openAlert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
    logout();
    router.replace("/login");

    // 1초 후에 모달 상태 초기화 (다른 페이지에서 새로운 검증 가능)
    setTimeout(() => {
      isModalShowing = false;
    }, 1000);
  }, [logout, openAlert, router]);

  // 토큰 확인 함수
  const checkAuthToken = useCallback(async () => {
    // 이미 확인 중이거나 모달이 표시 중이면 중복 실행 방지
    if (isChecking || isModalShowing) {
      return true;
    }

    try {
      setIsChecking(true);

      // 쿠키 확인
      const token = await getCookieOfToken();

      if (!token) {
        // 모달이 표시 중이지 않을 때만 로그아웃 처리
        if (!isModalShowing) {
          handleLogout();
        }
        return false;
      }

      return true;
    } catch (error) {
      console.error("토큰 확인 중 오류:", error);
      return false;
    } finally {
      setIsChecking(false);
    }
  }, [handleLogout, isChecking]);

  // 컴포넌트 마운트 시 즉시 토큰 확인
  useEffect(() => {
    // 이미 모달이 표시 중이면 추가 검사 중지
    if (isModalShowing) {
      return;
    }

    const initialCheck = async () => {
      await checkAuthToken();
    };

    initialCheck();

    // 10분마다 토큰 체크
    checkIntervalRef.current = setInterval(async () => {
      // 모달이 표시 중이면 검사 건너뛰기
      if (!isModalShowing) {
        await checkAuthToken();
      }
    }, 600000);

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [checkAuthToken]);

  // 로그인 상태 변경 감지
  useEffect(() => {
    // 로그인 상태가 변경되고 모달이 표시되지 않은 경우에만 실행
    if (!isLoggedIn && !isChecking && !isModalShowing) {
      const checkToken = async () => {
        await checkAuthToken();
      };
      checkToken();
    }
  }, [isLoggedIn, checkAuthToken, isChecking]);

  return null;
};

export default TokenValidator;
