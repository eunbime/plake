import Link from "next/link";

import { Button } from "../ui/button";

const NavList = () => {
  return (
    <nav>
      <div className="mb-11 mt-4 flex items-center justify-between md:hidden">
        <Button
          variant="outline"
          size="sm"
          className="w-20 border-2 border-purple-600 font-semibold text-purple-600 hover:text-purple-800"
        >
          로그인
        </Button>
        <Button
          size="sm"
          className="w-20 bg-purple-600 font-semibold text-white hover:bg-purple-800"
        >
          회원가입
        </Button>
      </div>
      <ul className="flex flex-col gap-6 font-semibold md:flex-row md:gap-6">
        <li>
          <Link href="/">모임 찾기</Link>
        </li>
        <li>
          <Link href="/">찜한 모임</Link>
        </li>
        <li>
          <Link href="/">모든 리뷰</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
