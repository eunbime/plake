"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { deadlineImminentGatheringsQueryOption } from "@/hooks/gathering/useDeadlineImminentGatherings";

import MainCarousel from "./MainCarousel";

const DeadLineCarousel = () => {
  const { data: deadlineData } = useSuspenseQuery(
    deadlineImminentGatheringsQueryOption(),
  );

  return <MainCarousel type="deadline" data={deadlineData} />;
};

export default DeadLineCarousel;
