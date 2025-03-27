import Service from "@/services/Service";
import { IMyGathering } from "@/types/gathering";
import { getCookieOfToken } from "@/utils/cookieToken";

class GatheringService extends Service {
  constructor(token: string) {
    super();
    this.setToken(token);
  }

  createGathering(formData: FormData) {
    return this.http.post("/gatherings", formData);
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

  getMyGatheringList(reviewedOnly?: boolean, params?: string) {
    const reviewedFilter = reviewedOnly ? "reviewed=false" : "";
    const query = [reviewedFilter, params].filter(Boolean).join("&");

    return this.http.get<IMyGathering[]>(
      `/gatherings/joined${query && `?${query}`}`,
    );
  }
}

export async function createGatheringService() {
  const token = await getCookieOfToken();

  if (!token) {
    throw new Error("Token is not found");
  }

  return new GatheringService(token);
}

// 삭제될 코드 | route handler 도입 예정
export function createClientGatheringService(token: string) {
  return new GatheringService(token);
}
