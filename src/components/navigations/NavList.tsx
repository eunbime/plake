import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_BUTTONS, NAV_ITEMS } from "@/constants/nav";
import { cn } from "@/lib/utils";
import useSideBarStore from "@/stores/useSideBarStore";

import { Button } from "../ui/Button";

const NavButtonForMobile = () => {
  const { toggleSideBar } = useSideBarStore();
  const isLoggedIn = true; // 임시 로그인 상태 state
  const tempLogout = () => {
    // 임시 로그아웃 함수
    console.log("User logged out");
  };

  return (
    <div className="mb-11 mt-4 flex items-center justify-between md:hidden">
      {NAV_BUTTONS.filter(button => isLoggedIn === button.loggedInShow).map(
        button => (
          <Button
            key={button.href}
            size="sm"
            className={clsx("w-20", {
              "border-2": button.variant === "purple-outline",
            })}
            onClick={() => {
              toggleSideBar(false);
              if (button.name === "로그아웃") tempLogout();
            }}
            variant={button.variant}
            asChild
            aria-label={button.ariaLabel}
          >
            <Link href={button.href}>{button.name}</Link>
          </Button>
        ),
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
            onClick={() => toggleSideBar(false)}
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
