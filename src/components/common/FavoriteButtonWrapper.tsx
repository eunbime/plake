"use client";

import { useEffect, useState } from "react";

import useUserStore from "@/stores/useUserStore";

import FavoriteButton from "./FavoriteButton";

interface FavoriteButtonWrapperProps {
  id: string;
}

const FavoriteButtonWrapper = ({ id }: FavoriteButtonWrapperProps) => {
  const user = useUserStore(state => state.user);
  const email = user?.email || "unknown";

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const onClickToggle = (id: string) => {
    const value = localStorage.getItem("favorite");
    const favorite = JSON.parse(value || "null") || new Object();
    const favoriteByUser: Set<string> = new Set(favorite?.[email]) || new Set();

    if (!favoriteByUser.has(id)) {
      favoriteByUser.add(id);
      setIsFavorite(true);
    } else {
      favoriteByUser.delete(id);
      setIsFavorite(false);
    }

    favorite[email] = Array.from(favoriteByUser);
    localStorage.setItem("favorite", JSON.stringify(favorite));
  };

  useEffect(() => {
    const value = localStorage.getItem("favorite");
    const favoriteList = JSON.parse(value || "null");

    if (favoriteList?.[email]) setIsFavorite(favoriteList[email].includes(id));
  }, [id, email]);

  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={() => onClickToggle(id)}
      />
    </>
  );
};

export default FavoriteButtonWrapper;
