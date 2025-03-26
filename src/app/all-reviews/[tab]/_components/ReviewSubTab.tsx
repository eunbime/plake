"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { REVIEW_OFFLINE_PATH } from "@/constants/review";
import { SUB_TAB } from "@/constants/ui";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";
import { cn } from "@/lib/utils";

const ReviewSubTab = () => {
  const pathname = usePathname();
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const type = searchParams.get("type") || "";

  return (
    <div className="align-center flex gap-2">
      {SUB_TAB[pathname === REVIEW_OFFLINE_PATH ? "OFFLINE" : "ONLINE"].map(
        (tab, i) => (
          <Link
            href={tab.value ? `?type=${tab.value}` : REVIEW_OFFLINE_PATH}
            key={i}
          >
            <Button
              variant="default"
              aria-label="서브 주제 탭"
              onClick={() =>
                setSearchParams(prev => ({ ...prev, type: tab.value }))
              }
              className={cn(
                "rounded-xl px-4 py-2.5",
                tab.value !== type &&
                  "bg-gray-200 text-black hover:bg-gray-200/90",
              )}
            >
              {tab.name}
            </Button>
          </Link>
        ),
      )}
    </div>
  );
};

export default ReviewSubTab;
