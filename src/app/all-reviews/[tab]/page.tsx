import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import FetchBoundary from "@/components/boundary/FetchBoundary";
import ReviewCardItemSkeleton from "@/components/skeletons/ReviewCardItemSkeleton";

import ReviewFilterSort from "./_components/ReviewFilterSort";
import ReviewListParent from "./_components/ReviewListParent";
import ReviewRating from "./_components/ReviewRating";

const Page = () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ReviewRating />
      <ReviewFilterSort />
      <FetchBoundary fallback={<ReviewCardItemSkeleton />}>
        <ReviewListParent />
      </FetchBoundary>
    </HydrationBoundary>
  );
};

export default Page;
