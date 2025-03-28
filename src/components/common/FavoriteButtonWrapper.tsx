"use client";

import { useEffect, useState } from "react";

import FavoriteButton from "./FavoriteButton";

interface FavoriteButtonWrapperProps {
  id: string;
}

const FavoriteButtonWrapper = ({ id }: FavoriteButtonWrapperProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const onClickToggle = (id: string) => {
    const value = localStorage.getItem("favorite");
    const favoriteList = JSON.parse(value || "null");
    const favoriteSet: Set<string> = new Set(favoriteList);

    if (!favoriteSet.has(id)) {
      favoriteSet.add(id);
      setIsFavorite(true);
    } else {
      favoriteSet.delete(id);
      setIsFavorite(false);
    }

    localStorage.setItem("favorite", JSON.stringify(Array.from(favoriteSet)));
  };

  useEffect(() => {
    const value = localStorage.getItem("favorite");
    const favoriteList = JSON.parse(value || "null");

    if (favoriteList) setIsFavorite(favoriteList.includes(id));
  }, [id]);

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
