import { Label } from "@/components/ui/Label";

const labelStyle = "text-sm font-semibold text-gray-800";
const inputStyle =
  "rounded-lg bg-gray-50 px-4 py-[10px] font-medium text-gray-400";

const DateTimePicker = () => {
  return (
    <div className="flex w-full gap-2">
      <div className="flex flex-1 flex-col gap-2">
        <Label className={labelStyle} id="gathering-date">
          모임 날짜
        </Label>
        <input type="date" id="gathering-date" className={inputStyle} />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <Label className={labelStyle} id="gathering-end-date">
          마감 날짜
        </Label>
        <input type="date" id="gathering-end-date" className={inputStyle} />
      </div>
    </div>
  );
};

export default DateTimePicker;
