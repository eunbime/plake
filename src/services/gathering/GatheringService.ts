import { CreateGatheringFormType } from "@/schemas/gatheringSchema";
import Service from "@/services/Service";
import { IGathering } from "@/types/gathering";

class GatheringService extends Service {
  constructor() {
    super();
    this.setToken("");
  }

  getGatheringList() {
    const data = this.http.get<IGathering[]>("/gatherings");
    return data;
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
}

const gatheringService = new GatheringService();

export default gatheringService;
