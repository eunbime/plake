import dayjs from "dayjs";
import { useRef, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";

import { Calendar } from "@/components/ui/Calendar";
import { Label } from "@/components/ui/Label";
import { useCalendar } from "@/hooks/useCalendar";
import { useClickOutside } from "@/hooks/useClickOutside";

interface IDateTimePickerProps {
  type: "dateTime" | "registrationEnd";
  dateTimeValue?: string;
  setDateTimeValue?: (value: string) => void;
  setRegistrationEndValue?: (value: string) => void;
}

const labelMap = {
  dateTime: "모임 날짜",
  registrationEnd: "마감 날짜",
} as const;

const DateTimePicker = ({
  type,
  dateTimeValue,
  setDateTimeValue,
  setRegistrationEndValue,
}: IDateTimePickerProps) => {
  const { calendarProps, selectedDate, selectDate } = useCalendar({
    disabledDate:
      type === "dateTime"
        ? new Date()
        : dateTimeValue
          ? new Date(dateTimeValue)
          : new Date(),
  });
  const calendarRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(calendarRef, () => setIsOpen(false));

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      selectDate(date);
      setIsOpen(false);
      if (type === "dateTime") {
        setDateTimeValue?.(date.toISOString());
      } else {
        setRegistrationEndValue?.(date.toISOString());
      }
    }
  };

  return (
    <div
      className="flex flex-1 flex-col gap-2"
      onClick={e => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <Label className="text-sm font-semibold text-gray-800">
        {labelMap[type]}
      </Label>
      <div className="relative flex items-center justify-between rounded-lg bg-gray-50 px-4 py-[10px]">
        <span className="font-medium text-gray-400">
          {selectedDate
            ? dayjs(selectedDate).format("YYYY-MM-DD")
            : "날짜를 선택해주세요"}
        </span>
        <FaRegCalendar
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <div
            ref={calendarRef}
            className="absolute left-0 top-10 z-10 h-full w-full"
          >
            <Calendar {...calendarProps} onSelect={handleDateChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;
