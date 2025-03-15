import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/constants/nav";
import { cn } from "@/lib/utils";
import useSideBarStore from "@/stores/useSideBarStore";

import { Button } from "../ui/Button";

const NavButtonForMobile = () => {
  const { toggleSideBar } = useSideBarStore();
  const isLoggedIn = true; // 임시 로그인 상태 state

  return (
    <div className="mb-11 mt-4 flex items-center justify-between md:hidden">
      {isLoggedIn ? (
        <>
          <Button
            size="sm"
            className="w-20 border-2"
            onClick={toggleSideBar}
            variant={"purple-outline"}
            asChild
            aria-label="mypage-link-button"
          >
            <Link href="/mypage">마이페이지</Link>
          </Button>
          <Button
            size="sm"
            className="w-20 font-semibold"
            onClick={toggleSideBar}
            variant={"purple"}
            aria-label="join-link-button"
          >
            로그아웃
          </Button>
        </>
      ) : (
        <>
          <Button
            size="sm"
            className="w-20 border-2"
            onClick={toggleSideBar}
            variant={"purple-outline"}
            asChild
            aria-label="login-link-button"
          >
            <Link href="/login">로그인</Link>
          </Button>
          <Button
            size="sm"
            className="w-20 font-semibold"
            onClick={toggleSideBar}
            variant={"purple"}
            asChild
            aria-label="join-link-button"
          >
            <Link href="/join">회원가입</Link>
          </Button>
        </>
      )}
    </div>
  );
};

interface INavItemProps {
  isActive: (href: string) => boolean;
}

const NavItem = ({ isActive }: INavItemProps) => {
  const { toggleSideBar } = useSideBarStore();

  return (
    <ul className="flex flex-col gap-6 font-semibold md:flex-row md:gap-6">
      {NAV_ITEMS.map(item => (
        <li key={item.href}>
          <Link
            onClick={toggleSideBar}
            href={item.href}
            className={cn(
              "transition-colors hover:text-purple-600",
              isActive!(item.href)
                ? "font-bold text-purple-600"
                : "text-gray-700",
            )}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
interface INavListProps {
  activePath?: string; // 스토리북 환경에서 테스트하기 위한 path prop
}

const NavList = ({ activePath }: INavListProps) => {
  const pathname = usePathname();
  const currentPath = activePath || pathname;

  const isActive = (path: string): boolean => {
    return currentPath.startsWith(path);
  };

  return (
    <nav>
      <NavButtonForMobile />
      <NavItem isActive={isActive} />
    </nav>
  );
};

export default NavList;
