import ApiClient from "@/app/lib/api/ApiClient";
import { getCookieOfToken } from "@/utils/cookieToken";

export async function PUT(req: Request) {
  const token = await getCookieOfToken();
  if (!token) {
    return Response.json(
      { code: "UNAUTHORIZED", message: "인증이 필요합니다." },
      { status: 401 },
    );
  }

  const formData = await req.formData();
  const client = new ApiClient(token);
  return client.put("/auths/user", formData);
}
