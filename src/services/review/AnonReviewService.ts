import Service from "@/services/Service";
import { IReviewResponse } from "@/types/review";

class AnonReviewService extends Service {
  getReviewList = () => {
    return this.http.get<IReviewResponse>("/reviews");
  };

  getReviewsByGatheringId = (searchParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams).toString();
    return this.http.get<IReviewResponse>(`/reviews?${params}`);
  };
}

const anonReviewService = new AnonReviewService();

export default anonReviewService;
