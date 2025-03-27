import { ITEMS_PER_PAGE } from "@/constants/gatheringFilterParams";
import Service from "@/services/Service";
import {
  IGathering,
  IGatheringFilterParams,
  IParticipant,
} from "@/types/gathering";

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

  getGatheringInfiniteList(
    pageParam?: number,
    params?: IGatheringFilterParams,
  ) {
    if (!pageParam) pageParam = 1;

    const sliceParams = `limit=${ITEMS_PER_PAGE}&offset=${(pageParam - 1) * 10}`;
    const defaultParams = `${sliceParams}&sortBy=dateTime`;

    if (params && Object.keys(params).length !== 0) {
      const convertedParams = new URLSearchParams(params).toString();

      return this.http.get<IGathering[]>(
        `/gatherings?${convertedParams}&${defaultParams}`,
      );
    } else {
      return this.http.get<IGathering[]>(`/gatherings?${defaultParams}`);
    }
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
