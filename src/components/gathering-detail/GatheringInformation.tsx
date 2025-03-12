"use client";

import { FaCircleCheck } from "react-icons/fa6";

import DateTimeTag from "../common/DateTimeTag";
import FavoriteButton from "../common/FavoriteButton";
import ProgressBar from "../common/ProgressBar";

const GatheringDetailInformation = () => {
  return (
    <article className="flex h-[270px] flex-1 flex-col gap-6 rounded-3xl border-2 border-gray-200 bg-white px-1 py-6">
      <section className="mb-5 flex justify-between gap-2 px-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">달램핏 오피스 스트레칭</p>
            <p className="text-sm font-medium">
              을지로 3가 서울시 중구 청계천로 100
            </p>
          </div>
          <DateTimeTag date={new Date()} />
        </div>
        <div>
          <FavoriteButton isFavorite={false} onToggle={() => {}} />
        </div>
      </section>
      <hr className="border-b-2 border-dashed border-gray-200" />
      <section className="flex flex-col gap-2 px-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-sm font-semibold text-gray-900">
            <p>모집 정원 16명</p>
            <p>참여 유저</p>
          </div>
          <div className="flex items-center gap-2 text-purple-500">
            <FaCircleCheck size={18} />
            <p className="text-sm font-medium">개설 확정</p>
          </div>
        </div>
        <ProgressBar progress={50} />
        <div className="flex items-center justify-between text-xs font-medium text-gray-700">
          <span>최소인원 1명</span>
          <span>최대인원 16명</span>
        </div>
      </section>
    </article>
  );
};

export default GatheringDetailInformation;
