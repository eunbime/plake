import Service from "@/services/Service";
import { getCookieOfToken } from "@/utils/cookieToken";

class ReviewService extends Service {
  constructor(token: string) {
    super();
    this.setToken(token);
  }

  createReview = () => {
    return this.http.post("/reviews", {});
  };
}

export async function createReviewService() {
  const token = await getCookieOfToken();

  if (!token) {
    throw new Error("Token is not found");
  }

  return new ReviewService(token);
}
