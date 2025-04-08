"use client";

import { useState } from "react";

import { MAX_FAVORITE_COUNT } from "@/constants/favorite";
import useFavoriteLocalStorage from "@/hooks/useFavorite";
import useFavoriteStore from "@/stores/useFavoriteStore";
import useModalStore from "@/stores/useModalStore";

import FavoriteButton from "./FavoriteButton";

interface FavoriteButtonWrapperProps {
  id: string;
}

const FavoriteButtonWrapper = ({ id }: FavoriteButtonWrapperProps) => {
  const openAlert = useModalStore(state => state.openAlert);
  const { setFavoriteNewValue } = useFavoriteLocalStorage();

  const favoriteList = useFavoriteStore(state => state.favoriteList);

  const [isFavorite, setIsFavorite] = useState<boolean>(
    favoriteList?.includes(id),
  );

  const onClickToggle = (id: string) => {
    const favoriteByUser: Set<string> = new Set(favoriteList) || new Set();

    if (!favoriteByUser.has(id)) {
      if (favoriteByUser.size >= MAX_FAVORITE_COUNT)
        openAlert("모임 찜하기는 최대 30개까지 가능합니다.");
      else {
        favoriteByUser.add(id);
      }
      setIsFavorite(true);
    } else {
      favoriteByUser.delete(id);
      setIsFavorite(false);
    }

    setFavoriteNewValue(favoriteByUser);
  };

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
