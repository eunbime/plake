import Service from "@/services/Service";
import { IGathering } from "@/types/gathering";

class GatheringService extends Service {
  getGatheringList() {
    const data = this.http.get<IGathering[]>("/gatherings");
    return data;
  }
  getGatheringDetail(id: string) {
    const data = this.http.get<IGathering>(`/gatherings/${id}`);
    return data;
  }
}

const gatheringService = new GatheringService();

export default gatheringService;
