import Service from "@/services/Service";
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
}

export const createGatheringService = async () => {
  const token = await getCookieOfToken();

  if (!token) {
    throw new Error("Token is not found");
  }

  return new GatheringService(token);
};
