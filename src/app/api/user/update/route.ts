import { NextResponse } from "next/server";

import { apiFetch } from "@/app/lib/api/apiFetch";
import { handleRouteError } from "@/app/lib/api/handleRouteErorr";
import { getCookieOfToken } from "@/utils/cookieToken";

export async function PUT(req: Request) {
  const token = await getCookieOfToken();
  if (!token) {
    return NextResponse.json(
      { code: "UNAUTHORIZED", message: "인증이 필요합니다." },
      { status: 401 },
    );
  }

  const formData = await req.formData();

  try {
    const result = await apiFetch("/auths/user", "PUT", formData, token);
    return NextResponse.json(result);
  } catch (error) {
    return handleRouteError(error);
  }
}
