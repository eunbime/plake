"use client";

import { useEffect, useState } from "react";

import useUserStore from "@/stores/useUserStore";

const GatheringFavoriteList = () => {
  const user = useUserStore(state => state.user);
  const email = user?.email || "unknown";

  const [favoriteList, setFavoriteList] = useState<number[]>([]);

  useEffect(() => {
    const value = localStorage.getItem("favorite");
    const favoriteList = JSON.parse(value || "null");

    setFavoriteList(favoriteList[email]);
  }, [email]);

  return (
    <>
      <h1>좋아요 모임 id 리스트</h1>
      <div className="flex flex-col">
        {user ? `${email}` : "Unknown"} 님의 즐겨찾기 리스트
        {favoriteList && favoriteList.map(id => <span key={id}>{id}</span>)}
      </div>
    </>
  );
};

export default GatheringFavoriteList;
