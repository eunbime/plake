class ReviewService {
  async createReview(formData: FormData) {
    const res = await fetch("/api/reviews", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }
}

const reviewService = new ReviewService();

export default reviewService;
