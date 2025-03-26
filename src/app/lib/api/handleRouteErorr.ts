import { NextResponse } from "next/server";

export const handleRouteError = (error: unknown) => {
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    "message" in error &&
    "status" in error
  ) {
    const err = error as { code: string; message: string; status: number };

    return NextResponse.json(
      {
        code: err.code,
        message: err.message,
      },
      { status: err.status },
    );
  }

  // 예기치 못한 에러 (포맷 안 맞는 경우)
  return NextResponse.json(
    {
      code: "UNKNOWN_ERROR",
      message: "서버 오류가 발생했습니다.",
    },
    { status: 500 },
  );
};
