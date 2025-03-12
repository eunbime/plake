import clsx from "clsx";
import dayjs from "dayjs";

interface IDateTimeTagProps {
  size?: "small" | "medium";
  date: Date;
}

const baseStyle =
  "flex items-center justify-center rounded-[4px] bg-purple-200 py-[2px] text-sm font-medium";

const DateTimeTag = ({ size = "medium", date }: IDateTimeTagProps) => {
  const currentDate = dayjs(date);
  const dateText = currentDate.format("M월 DD일");
  const timeText = currentDate.format("HH:mm");

  return (
    <div className="flex gap-2" role="group" aria-label="날짜 및 시간">
      <time
        aria-label="날짜"
        className={clsx(
          "text-black",
          baseStyle,
          size === "small" && "px-[6px] text-xs",
          size === "medium" && "px-2 text-sm",
        )}
      >
        {dateText}
      </time>
      <time
        aria-label="시간"
        className={clsx(
          "text-purple-600",
          baseStyle,
          size === "small" && "px-[6px] text-xs",
          size === "medium" && "px-2 text-sm",
        )}
      >
        {timeText}
      </time>
    </div>
  );
};

export default DateTimeTag;
