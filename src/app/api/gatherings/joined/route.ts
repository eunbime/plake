import ApiClient from "@/app/lib/api/ApiClient";
import { getCookieOfToken } from "@/utils/cookieToken";

export async function GET(req: Request) {
  const token = await getCookieOfToken();

  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();
  const client = new ApiClient(token);

  return client.get(`/gatherings/joined${query ? `?${query}` : ""}`);
}
