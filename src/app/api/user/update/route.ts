import { NextResponse } from "next/server";

import ApiClient from "@/app/lib/api/ApiClient";
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
  const client = new ApiClient(token);

  try {
    const data = await client.put("/auths/user", formData);
    return NextResponse.json(data);
  } catch (error) {
    return handleRouteError(error);
  }
}
