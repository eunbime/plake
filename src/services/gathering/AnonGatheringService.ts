import Service from "@/services/Service";
import { IGathering, IParticipant } from "@/types/gathering";

class AnonGatheringService extends Service {
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

  getGatheringParticipants(id: string) {
    const data = this.http.get<IParticipant[]>(
      `/gatherings/${id}/participants`,
    );
    return data;
  }
}

const anonGatheringService = new AnonGatheringService();

export default anonGatheringService;
