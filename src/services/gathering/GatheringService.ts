import Service from "@/services/Service";
import { IGathering } from "@/types/gathering";
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
}

export const createGatheringService = async () => {
  const token = await getCookieOfToken();
  return new GatheringService(token);
};

const gatheringService = new GatheringService();

export default gatheringService;
