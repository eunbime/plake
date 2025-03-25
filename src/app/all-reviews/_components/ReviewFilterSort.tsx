import Dropdown from "@/components/common/Dropdown";
import FilterCalendar from "@/components/common/FilterCalendar";

const sortOption = [
  { value: "createdAt", label: "생성일자 순" },
  { value: "score", label: "평점순" },
  { value: "participantCount", label: "참여 인원 순" },
];

const GatheringFilterSort = () => {
  return (
    <section className="mb-6 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <Dropdown />
        <FilterCalendar />
      </div>
      <div>
        <Dropdown type="sort" placeholder="정렬" option={sortOption} />
      </div>
    </section>
  );
};

export default GatheringFilterSort;
