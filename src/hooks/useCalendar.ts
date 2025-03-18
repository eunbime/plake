import { isSameMonth, subMonths } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";

import { CalendarProps } from "@/components/ui/Calendar";

interface IUseCalendar {
  defaultDate?: Date;
  disabledDate?: Date;
}

export const useCalendar = (props?: IUseCalendar) => {
  const defaultDate = props?.defaultDate ?? new Date();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    defaultDate,
  );

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const calendarProps: Partial<CalendarProps> = {
    mode: "single",
    selected: selectedDate,
    onSelect: handleDateChange,
    month: selectedDate,
    onMonthChange: (month: Date) => {
      if (props?.disabledDate) {
        const oneMonthBefore = subMonths(props.disabledDate, 1);
        if (month <= oneMonthBefore || isSameMonth(month, props.disabledDate)) {
          setSelectedDate(props.disabledDate);
          return;
        }
      }
      setSelectedDate(month);
    },
    defaultMonth: defaultDate,
    disabled: props?.disabledDate ? { before: props.disabledDate } : undefined,
    locale: ko,
  };

  const selectDate = (date: Date | undefined) => {
    handleDateChange(date);
  };

  const clearDate = () => {
    handleDateChange(defaultDate);
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
