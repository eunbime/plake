"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

import Pagination from "@/components/ui/Pagination";
import { reviewsByGatheringIdQueryOption } from "@/hooks/review/useReviewsByGatheringId";
import { useScrollToTopOnValueChange } from "@/hooks/useScrollToTopOnValueChange";

import GatheringReviewItem from "./GatheringReviewItem";

const GatheringReviewList = () => {
  const { id } = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery(
    reviewsByGatheringIdQueryOption(id),
  );

  useScrollToTopOnValueChange(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <section className="flex h-full min-h-[80vh] flex-col gap-6 border-t-2 border-gray-200 bg-white p-6 pb-20">
      <p className="text-lg font-semibold">
        {"이용자들은 이 프로그램을 이렇게 느꼈어요!"}
      </p>
      {data.pages[0].data.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-center text-sm text-gray-500">
            {"아직 리뷰가 없어요."}
          </p>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between">
          {data.pages
            .flatMap(page => page.data)
            .map(review => (
              <GatheringReviewItem key={review.id} review={review} />
            ))}
          <Pagination
            totalPage={data.pages[0].totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  );
};

export default GatheringReviewList;
