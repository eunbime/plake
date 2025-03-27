import ApiClient from "@/app/lib/api/ApiClient";
import { getCookieOfToken } from "@/utils/cookieToken";

export async function POST(req: Request) {
  const token = await getCookieOfToken();

  const formData = await req.formData();
  const client = new ApiClient(token);
  return client.post("/gatherings", formData);
}
