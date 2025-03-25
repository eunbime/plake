import { useEffect } from "react";

export const useScrollToTop = (value: number) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [value]);
};
