import Rating from "@/components/common/Rating";

const ReviewRating = () => {
  return (
    <section className="mb-6 flex flex-wrap items-center justify-between border-b-2 border-t-2 border-gray-200 bg-white px-6 py-8">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-semibold text-gray-400 md:text-2xl">
          <span className="text-gray-900">4.0</span> /5
        </h1>
        <Rating rating={4} />
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-2 md:mt-0">
        {[5, 4, 3, 2, 1].map(n => (
          <div key={n} className="flex items-center gap-2">
            <span className="break-keep text-sm text-gray-700">{n}점</span>
            <div className="mx-3 h-1 w-full min-w-36 max-w-60 rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gray-900"
                style={{ width: `${(n / 5) * 100}%` }}
              ></div>
            </div>
            <span className="break-keep text-sm text-gray-400">50</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ReviewRating;
