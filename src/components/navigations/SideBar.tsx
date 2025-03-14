import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";

import NavList from "./NavList";

interface ISideBarProps {
  isOpen: boolean;
  onToggleSideBar: () => void;
}

const SideBar = ({ isOpen, onToggleSideBar }: ISideBarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onToggleSideBar}>
      <SheetTrigger onClick={onToggleSideBar}>
        <RxHamburgerMenu
          size={20}
          color="black"
          className="absolute left-5 top-5 md:hidden"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[200px] bg-white p-4">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" onClick={onToggleSideBar}>
              <Image
                src="/images/logo.png"
                alt="logo-image"
                width={70}
                height={15}
              />
            </Link>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <NavList onToggleSideBar={onToggleSideBar} />
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
