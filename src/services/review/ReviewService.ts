import Service from "@/services/Service";
import { IReviewResponse } from "@/types/review";
import { getCookieOfToken } from "@/utils/cookieToken";

class ReviewService extends Service {
  constructor(token?: string) {
    super();
    this.setToken(token || "");
  }

  getReviewList = () => {
    return this.http.get<IReviewResponse>("/reviews");
  };

  getReviewsByGatheringId = (gatheringId: string) => {
    return this.http.get<IReviewResponse>(
      `/reviews?gatheringId=${gatheringId}`,
    );
  };

  createReview = () => {
    return this.http.post("/reviews", {});
  };
}

// 로그인 기반 요청 시 사용할 팩토리 함수
export async function createReviewService() {
  const token = await getCookieOfToken();
  return new ReviewService(token);
}

// 비로그인에서도 사용 가능한 기본 인스턴스
const reviewService = new ReviewService();
export { reviewService };
