import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavList from "./NavList";

interface ISideBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SideBar = ({ isOpen, onToggle }: ISideBarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetTrigger onClick={onToggle}>
        <RxHamburgerMenu
          size={20}
          color="black"
          className="absolute left-5 top-5 md:hidden"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[200px] p-4">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/logo.png"
              alt="logo-image"
              width={70}
              height={15}
            />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <NavList />
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
