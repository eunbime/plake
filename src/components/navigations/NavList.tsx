import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";

const NAV_ITEMS = [
  { name: "모임 찾기", href: "/gathering" },
  { name: "찜한 모임", href: "/favorites" },
  { name: "모든 리뷰", href: "/all-reviews" },
] as const;

interface INavListProps {
  onToggleSideBar?: () => void;
  activePath?: string; // 스토리북 환경에서 테스트하기 위한 path prop
}

const NavList = ({ onToggleSideBar, activePath }: INavListProps) => {
  const pathname = usePathname();
  const currentPath = activePath || pathname;

  const isActive = (path: string): boolean => {
    return currentPath.startsWith(path);
  };

  return (
    <nav>
      <div className="mb-11 mt-4 flex items-center justify-between md:hidden">
        <Button
          size="sm"
          className="w-20 border-2"
          onClick={onToggleSideBar}
          variant={"purple-outline"}
          asChild
          aria-label="login-link-button"
        >
          <Link href="/login">로그인</Link>
        </Button>
        <Button
          size="sm"
          className="w-20 font-semibold"
          onClick={onToggleSideBar}
          variant={"purple"}
          asChild
          aria-label="join-link-button"
        >
          <Link href="/join">회원가입</Link>
        </Button>
      </div>
      <ul className="flex flex-col gap-6 font-semibold md:flex-row md:gap-6">
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <Link
              onClick={onToggleSideBar}
              href={item.href}
              className={cn(
                "transition-colors hover:text-purple-600",
                isActive(item.href)
                  ? "font-bold text-purple-600"
                  : "text-gray-700",
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
