import { Label } from "@/components/ui/Label";

const SelectDate = () => {
  return (
    <div>
      <div>
        <Label className="text-sm font-semibold" id="gathering-date">
          모임 날짜
        </Label>
        <input type="date" id="gathering-date" />
      </div>
      <div>
        <Label className="text-sm font-semibold" id="gathering-end-date">
          마감 날짜
        </Label>
        <input type="date" id="gathering-end-date" />
      </div>
    </div>
  );
};

export default SelectDate;
