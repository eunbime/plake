import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";

import TimePicker from "@/components/modals/create-gathering-modal/TimePicker";
import { Calendar } from "@/components/ui/Calendar";
import { Label } from "@/components/ui/Label";
import { useCalendar } from "@/hooks/useCalendar";
import { useClickOutside } from "@/hooks/useClickOutside";

interface IDateTimePickerProps {
  type: "dateTime" | "registrationEnd";
  dateTimeValue?: string;
  registrationEndValue?: string;
  setDateTimeValue?: (value: string) => void;
  setRegistrationEndValue?: (value: string) => void;
}

const DateTimePicker = ({
  type,
  dateTimeValue,
  registrationEndValue,
  setDateTimeValue,
  setRegistrationEndValue,
}: IDateTimePickerProps) => {
  const { calendarProps, selectedDate, selectDate } = useCalendar({
    disabledAfterDate:
      type === "registrationEnd" && dateTimeValue
        ? new Date(dateTimeValue)
        : undefined,
  });
  const calendarRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState<string>("");

  useEffect(() => {
    const value = type === "dateTime" ? dateTimeValue : registrationEndValue;
    if (value) {
      setDisplayValue(dayjs(value).format("YYYY-MM-DD hh:mm A"));
    } else {
      setDisplayValue("날짜를 선택해주세요");
    }
  }, [dateTimeValue, registrationEndValue, type]);

  useClickOutside(calendarRef, () => setIsOpen(false));

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      selectDate(date);
      const formattedDate = date.toISOString();
      if (type === "dateTime") {
        setDateTimeValue?.(formattedDate);
      } else {
        setRegistrationEndValue?.(formattedDate);
      }
    }
  };

  const handleTimeChange = (value: Date) => {
    const formattedDate = value.toISOString();
    if (type === "dateTime") {
      setDateTimeValue?.(formattedDate);
    } else {
      setRegistrationEndValue?.(formattedDate);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-2">
      <Label className="text-sm font-semibold text-gray-800">
        {type === "dateTime" ? "모임 날짜" : "마감 날짜"}
      </Label>
      <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-[10px]">
        <span className="font-medium text-gray-400">{displayValue}</span>
        <FaRegCalendar
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <div
            ref={calendarRef}
            className="absolute bottom-20 left-0 z-10 flex w-full flex-col items-center justify-center gap-3 divide-x-0 divide-gray-200 rounded-2xl border border-gray-200 bg-white p-3 md:bottom-10 md:w-fit md:flex-row md:divide-x"
          >
            <Calendar {...calendarProps} onSelect={handleDateChange} />
            <TimePicker
              selectedDate={selectedDate}
              setValue={handleTimeChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;
