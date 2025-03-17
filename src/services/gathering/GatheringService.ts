import { IGathering } from "@/types/gathering";

import Service from "../Service";

class GatheringService extends Service {
  getGatheringList() {
    const data = this.http.get<IGathering[]>("/gatherings");
    return data;
  }
}

const gateringService = new GatheringService();

export default gateringService;
