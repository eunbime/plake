import Service from "@/services/Service";
import { IMyGathering, IMyGatheringFilterParams } from "@/types/gathering";
import { getCookieOfToken } from "@/utils/cookieToken";

class GatheringService {
  async createGathering(formData: FormData) {
    const res = await fetch("/api/gatherings", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }

  async getMyGatheringList(searchParams?: IMyGatheringFilterParams) {
    const paramStr = new URLSearchParams(
      (searchParams ?? {}) as Record<string, string>,
    ).toString();
    const baseURL = process.env.NEXT_PUBLIC_SITE_URL;
    const url = `/api/gatherings/joined${paramStr && `?${paramStr}`}`;

    const header = new Headers();
    let res: Response;
    if (typeof window === "undefined") {
      await import("next/headers").then(({ cookies }) => {
        const _cookies = cookies().getAll();
        const cookieArr = _cookies
          .map(cookie => `${cookie.name}=${cookie.value}`)
          .join("; ");
        header.set("Cookie", cookieArr);
      });
      res = await fetch(`${baseURL}${url}`, {
        method: "GET",
        credentials: "include",
        headers: header,
      });
    } else {
      res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
    }

    if (!res.ok) throw await res.json();
    return res.json() as Promise<IMyGathering[]>;
  }
}

const gatheringService = new GatheringService();

export default gatheringService;

// 삭제될 코드
class testGatheringService extends Service {
  constructor(token: string) {
    super();
    this.setToken(token);
  }

  deleteGathering(id: string) {
    return this.http.put(`/gatherings/${id}/cancel`);
  }

  joinGathering(id: string) {
    return this.http.post(`/gatherings/${id}/join`);
  }

  leaveGathering(id: string) {
    return this.http.delete(`/gatherings/${id}/leave`);
  }
}

export async function createGatheringService() {
  const token = await getCookieOfToken();

  if (!token) {
    throw new Error("Token is not found");
  }

  return new testGatheringService(token);
}
