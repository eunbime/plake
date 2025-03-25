"use client";

import { usePathname } from "next/navigation";

import Dropdown from "@/components/common/Dropdown";
import FilterCalendar from "@/components/common/FilterCalendar";
import { REVIEW_OFFLINE_TAB, REVIEW_SORT_OPTION } from "@/constants/review";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

const ReviewFilterSort = () => {
  const pathname = usePathname();
  const { setSearchParams } = useCustomSearchParams();

  return (
    <section className="mb-6 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        {pathname === REVIEW_OFFLINE_TAB && (
          <Dropdown onSelect={value => setSearchParams({ location: value })} />
        )}
        <FilterCalendar />
      </div>
      <div>
        <Dropdown
          type="sort"
          placeholder="정렬"
          option={REVIEW_SORT_OPTION}
          onSelect={value =>
            setSearchParams({
              sortBy: value.split("&")[0],
              sortOrder: value.split("&")[1],
            })
          }
        />
      </div>
    </section>
  );
};

export default ReviewFilterSort;
