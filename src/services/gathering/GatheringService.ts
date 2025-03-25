import { CreateGatheringFormType } from "@/schemas/gatheringSchema";
import Service from "@/services/Service";
import { IGathering, IMyGathering } from "@/types/gathering";
import { getCookieOfToken } from "@/utils/cookieToken";

class GatheringService extends Service {
  constructor(token?: string) {
    super();
    this.setToken(token || "");
  }

  getGatheringList(type?: string, params?: string) {
    const isOnline = type === "online";
    const onlineFilter = isOnline ? "?location=홍대입구" : "";
    const filterParams = isOnline ? onlineFilter + `&${params}` : `?${params}`;

    if (isOnline && !params)
      return this.http.get<IGathering[]>(`/gatherings${onlineFilter}`);

    if (params)
      return this.http.get<IGathering[]>(`/gatherings${filterParams}`);

    return this.http.get<IGathering[]>(`/gatherings`);
  }

  getGatheringDetail(id: string) {
    const data = this.http.get<IGathering>(`/gatherings/${id}`);
    return data;
  }

  createGathering(formData: CreateGatheringFormType) {
    const data = this.http.post("/gatherings", formData);
    return data;
  }

  deleteGathering(id: string) {
    const data = this.http.put(`/gatherings/${id}/cancel`);
    return data;
  }

  joinGathering(id: string) {
    const data = this.http.post(`/gatherings/${id}/join`);
    return data;
  }

  leaveGathering(id: string) {
    const data = this.http.delete(`/gatherings/${id}/leave`);
    return data;
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
  return new GatheringService(token);
}

export function createClientGatheringService(token: string) {
  return new GatheringService(token);
}

const gatheringService = new GatheringService();
export { gatheringService };
