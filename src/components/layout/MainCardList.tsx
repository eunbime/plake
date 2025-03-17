"use client";

import { useGateringList } from "@/hooks/gathering/useGatheringList";

import MainCardItem from "./MainCardItem";

const MainCardList = () => {
  const { data } = useGateringList();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {data?.pages.map((page, pageNum) =>
        page.map(card => (
          <MainCardItem
            key={card.id}
            id={card.id}
            name={card.name}
            dateTime={new Date(card.dateTime)}
            registrationEnd={new Date(card.registrationEnd)}
            location={card.location}
            participantCount={card.participantCount}
            capacity={card.capacity}
            image={card.image}
            firstPage={pageNum === 0}
          />
        )),
      )}
    </div>
  );
};

export default MainCardList;
