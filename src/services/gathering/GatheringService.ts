import { IMyGathering, IMyGatheringFilterParams } from "@/types/gathering";

class GatheringService {
  async getMyGatheringList(searchParams?: IMyGatheringFilterParams) {
    const paramStr = new URLSearchParams(
      (searchParams ?? {}) as Record<string, string>,
    ).toString();
    const url = `/api/gatherings/joined${paramStr && `?${paramStr}`}`;

    // 1. fetch가 pre render일때는 next js 서버로 api를 보내지만  <-- next가 자동으로 해주는 부분
    //     브라우저에서 동작할때는 base url을 인식을 못한다

    // 2. 갑자기 쿠키가 안감

    const res = await fetch(`http://localhost:3000/${url}`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) throw await res.json();
    return res.json() as Promise<IMyGathering[]>;
  }
}

export default new GatheringService();
