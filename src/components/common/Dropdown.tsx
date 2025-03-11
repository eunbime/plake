"use client";
import { IoMdArrowDropdown } from "react-icons/io";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface ILocationDropdownProps {
  isFormType?: boolean;
  onSelect?: () => void;
}

const location = [
  { value: "all", label: "지역 전체" },
  { value: "gangnam", label: "강남구" },
  { value: "seocho", label: "서초구" },
  { value: "gangbuk", label: "강북구" },
  { value: "mapo", label: "마포구" },
  { value: "yongsan", label: "용산구" },
  { value: "guro", label: "구로구" },
  { value: "gwanak", label: "관악구" },
  { value: "yeongdeungpo", label: "영등포구" },
];

const LocationDropdown = ({ isFormType, onSelect }: ILocationDropdownProps) => {
  return (
    <Select>
      <SelectTrigger
        className={cn(
          "w-full bg-white",
          isFormType
            ? "border-gray-50 bg-gray-50 data-[placeholder]:text-gray-400"
            : "bg-white data-[placeholder]:text-black",
        )}
      >
        <SelectValue
          placeholder={`${isFormType ? "장소를 선택해주세요." : "지역 전체"}`}
        />
        <IoMdArrowDropdown size={16} color="black" />
      </SelectTrigger>
      <SelectContent className="w-full min-w-[110px] bg-white text-black">
        {location?.map((option, i) => (
          <SelectItem
            key={`option-${i}`}
            value={option.value}
            className="h-[32px] rounded-xl px-2 py-1.5 pl-2 text-sm focus:bg-purple-100"
            onClick={onSelect}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LocationDropdown;
