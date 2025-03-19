import Service from "@/services/Service";
import { IReview } from "@/types/review";

export interface ReviewResponse {
  data: IReview[];
}

class ReviewService extends Service {
  getReviewList = () => {
    const data = this.http.get<ReviewResponse>("/reviews");
    return data;
  };
}

const reviewService = new ReviewService();

export default reviewService;
