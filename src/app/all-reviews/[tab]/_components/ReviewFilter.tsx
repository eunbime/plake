import ReviewSubTab from "./ReviewSubTab";
import ReviewTab from "./ReviewTab";

const ReviewFilter = () => {
  return (
    <section>
      <ReviewTab />
      <ReviewSubTab />
      <hr className="border-1 my-7 border-gray-200" />
    </section>
  );
};

export default ReviewFilter;
