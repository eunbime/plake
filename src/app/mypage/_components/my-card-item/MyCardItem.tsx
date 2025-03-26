import Link from "next/link";
import { ReactNode } from "react";

interface MyCardItemProps {
  id: number;
  children: ReactNode;
}

const MyCardItem = ({ id, children }: MyCardItemProps) => {
  return (
    <Link
      href={`/mypage/detail/${id}`}
      className="flex w-full flex-col gap-4 sm:flex-row"
    >
      {children}
    </Link>
  );
};

export default MyCardItem;
