import { Suspense } from "react";

import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import MainCardList from "@/components/layout/MainCardList";
import SubTab from "@/components/navigations/SubTab";
import Tab from "@/components/navigations/Tab";

const subTabData = ["전체", "운동", "예술", "미식", "기타"];

const Page = () => {
  return (
    <div className="base-wrap">
      <Suspense>
        <Tab />
      </Suspense>
      <SubTab tabList={subTabData} />
      <GatheringFilterSort />
      <MainCardList />
    </div>
  );
};

export default Page;
