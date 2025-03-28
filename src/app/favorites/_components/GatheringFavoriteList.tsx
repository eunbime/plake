"use client";

import { useEffect, useState } from "react";

const GatheringFavoriteList = () => {
  const [favoriteList, setFavoriteList] = useState<number[]>([]);

  useEffect(() => {
    const value = localStorage.getItem("favorite");
    const favoriteList = JSON.parse(value || "null");

    setFavoriteList(favoriteList);
  }, []);

  return (
    <>
      <h1>좋아요 모임 id 리스트</h1>
      <div className="flex flex-col">
        {favoriteList && favoriteList.map(id => <span key={id}>{id}</span>)}
      </div>
    </>
  );
};

export default GatheringFavoriteList;
