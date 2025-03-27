import { IMyGathering, IMyGatheringFilterParams } from "@/types/gathering";

class GatheringService {
  async getMyGatheringList(searchParams?: IMyGatheringFilterParams) {
    const paramStr = new URLSearchParams(
      (searchParams ?? {}) as Record<string, string>,
    ).toString();
    const baseURL = process.env.NEXT_PUBLIC_SITE_URL;
    const url = `/api/gatherings/joined${paramStr && `?${paramStr}`}`;

    const header = new Headers();
    let res: Response;
    if (typeof window === "undefined") {
      // const { getCookieOfToken } = await import("@/utils/cookieToken");
      // const { getGatheringsJoined } = await import(
      //   "@/app/api/gatherings/joined/route"
      // );

      // const token = await getCookieOfToken();

      // res = await getGatheringsJoined(paramStr, token);

      await import("next/headers").then(({ cookies }) => {
        const _cookies = cookies().getAll();
        const cookieArr = _cookies
          .map(cookie => `${cookie.name}=${cookie.value}`)
          .join("; ");
        header.set("Cookie", cookieArr);
      });
      res = await fetch(`${baseURL}${url}`, {
        method: "GET",
        credentials: "include",
        headers: header,
      });
    } else {
      res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
    }

    if (!res.ok) throw await res.json();
    return res.json() as Promise<IMyGathering[]>;
  }
}

const gatheringService = new GatheringService();

export default gatheringService;

// import Service from "@/services/Service";
// import { IMyGathering } from "@/types/gathering";
// import { getCookieOfToken } from "@/utils/cookieToken";

// class GatheringService extends Service {
//   constructor(token: string) {
//     super();
//     this.setToken(token);
//   }

//   createGathering(formData: FormData) {
//     return this.http.post("/gatherings", formData);
//   }

//   deleteGathering(id: string) {
//     return this.http.put(`/gatherings/${id}/cancel`);
//   }

//   joinGathering(id: string) {
//     return this.http.post(`/gatherings/${id}/join`);
//   }

//   leaveGathering(id: string) {
//     return this.http.delete(`/gatherings/${id}/leave`);
//   }

//   getMyGatheringList(reviewedOnly?: boolean, params?: string) {
//     const reviewedFilter = reviewedOnly ? "reviewed=false" : "";
//     const query = [reviewedFilter, params].filter(Boolean).join("&");

//     return this.http.get<IMyGathering[]>(
//       `/gatherings/joined${query && `?${query}`}`,
//     );
//   }
// }

// export async function createGatheringService() {
//   const token = await getCookieOfToken();

//   if (!token) {
//     throw new Error("Token is not found");
//   }

//   return new GatheringService(token);
// }

// // 삭제될 코드 | route handler 도입 예정
// export function createClientGatheringService(token: string) {
//   return new GatheringService(token);
// }
