import { ko } from "date-fns/locale";
import { useState } from "react";

import { CalendarProps } from "@/components/ui/Calendar";

interface IUseCalendar {
  defaultDate?: Date;
  disabledAfterDate?: Date;
}

export const useCalendar = (props?: IUseCalendar) => {
  const defaultDate = props?.defaultDate ?? new Date();
  const disabledBeforeDate = new Date();

  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);

  const handleDateChange = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
  };

  const calendarProps: Partial<CalendarProps> = {
    mode: "single",
    selected: selectedDate,
    onSelect: handleDateChange,
    defaultMonth: selectedDate,
    disabled: props?.disabledAfterDate
      ? { before: disabledBeforeDate, after: props.disabledAfterDate }
      : { before: disabledBeforeDate },
    locale: ko,
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const clearDate = () => {
    setSelectedDate(defaultDate);
  };

  const getSelectedDate = () => {
    return selectedDate;
  };

  return {
    selectedDate,
    selectDate,
    clearDate,
    getSelectedDate,
    calendarProps,
  };
};
