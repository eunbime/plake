import { ITEMS_PER_PAGE } from "@/constants/gatheringFilterParams";
import Service from "@/services/Service";
import {
  IGathering,
  IGatheringFilterParams,
  IMyGathering,
} from "@/types/gathering";
import { getCookieOfToken } from "@/utils/cookieToken";

class GatheringService extends Service {
  constructor(token?: string) {
    super();
    this.setToken(token || "");
  }

  getGatheringList() {
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
  return new GatheringService(token);
}

// 삭제될 코드 | route handler 도입 예정
export function createClientGatheringService(token: string) {
  return new GatheringService(token);
}

const gatheringService = new GatheringService();
export default gatheringService;
