import DateTimePicker from "@/components/modals/create-gathering-modal/DateTimePicker";

interface IDateTimeAndEndTimePickerProps {
  dateTimeValue: string;
  setDateTimeValue: (value: string) => void;
  setRegistrationEndValue: (value: string) => void;
}

const DateTimeAndEndTimePicker = ({
  dateTimeValue,
  setDateTimeValue,
  setRegistrationEndValue,
}: IDateTimeAndEndTimePickerProps) => {
  return (
    <div className="flex w-full gap-2">
      <DateTimePicker type="dateTime" setDateTimeValue={setDateTimeValue} />
      <DateTimePicker
        type="registrationEnd"
        dateTimeValue={dateTimeValue}
        setRegistrationEndValue={setRegistrationEndValue}
      />
    </div>
  );
};

export default DateTimeAndEndTimePicker;
