"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ONLINE_PARAMS } from "@/constants/gathering";
import { REVIEW_ONLINE_TAB, REVIEW_TAB } from "@/constants/review";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";
import { cn } from "@/lib/utils";

const ReviewTab = () => {
  const pathname = usePathname();
  const { setSearchParams } = useCustomSearchParams();

  return (
    <div className="mb-6 flex items-center gap-3">
      {REVIEW_TAB.map((tab, i) => (
        <Link
          key={i}
          href={tab.href}
          aria-label="리뷰페이지 주제 탭"
          className="relative"
          onClick={() =>
            pathname === REVIEW_ONLINE_TAB && setSearchParams(ONLINE_PARAMS)
          }
        >
          <span
            className={cn(
              "pb-1.5 text-lg font-semibold text-gray-400",
              pathname === tab.href &&
                "text-black after:absolute after:mt-1.5 after:block after:w-full after:border-b-2 after:border-gray-900 after:content-['']",
            )}
          >
            {tab.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ReviewTab;
