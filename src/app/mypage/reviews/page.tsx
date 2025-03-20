"use client";

import { useSearchParams } from "next/navigation";

import EmptyState from "../_components/EmptyState";
import ReviewTab from "../_components/ReviewTab";

const Page = () => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("type") || "writable";

  return (
    <>
      <ReviewTab />
      <EmptyState
        message={
          selectedTab === "writable"
            ? "작성할 수 있는 리뷰가 없습니다."
            : "작성한 리뷰가 없습니다."
        }
      />
    </>
  );
};

export default Page;
