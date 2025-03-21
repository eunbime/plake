import Service from "@/services/Service";
import { IReview } from "@/types/review";
import { getCookieOfToken } from "@/utils/cookieToken";

export interface ReviewResponse {
  data: IReview[];
}

class ReviewService extends Service {
  constructor(token?: string) {
    super();
    this.setToken(token || "");
  }

  getReviewList = () => {
    return this.http.get<ReviewResponse>("/reviews");
  };

  createReview = () => {
    const data = this.http.post("/reviews", {});
    return data;
  };
}

export async function createReviewService() {
  const token = await getCookieOfToken();
  return new ReviewService(token);
}
