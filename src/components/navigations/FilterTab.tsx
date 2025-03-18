"use client";

import { useEffect, useState } from "react";

import MainTab from "@/components/navigations/MainTab";
import SubTab from "@/components/navigations/SubTab";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

const FilterTab = () => {
  const { setSearchParams } = useCustomSearchParams();

  const [isOffline, setIsOffline] = useState<boolean>(true);
  const [activeMainTabIdx, setActiveMainTabIdx] = useState<number>(0);

  const onClickTab = (value: string) => {
    setSearchParams({
      type: value,
    });
  };

  useEffect(() => {
    if (activeMainTabIdx === 0) setIsOffline(true);
    else setIsOffline(false);
  }, [activeMainTabIdx]);

  return (
    <>
      <MainTab
        onClickTab={value => onClickTab(value)}
        activeMainTabIdx={activeMainTabIdx}
        setActiveMainTabIdx={setActiveMainTabIdx}
      />
      <SubTab onClickTab={value => onClickTab(value)} isOffline={isOffline} />
    </>
  );
};

export default FilterTab;
