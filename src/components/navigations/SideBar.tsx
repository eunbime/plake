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
import useSideBarStore from "@/stores/useSideBarStore";

import Avatar from "../common/Avatar";
import NavList from "./NavList";

const SideBar = () => {
  const { isOpen, onToggleSideBar } = useSideBarStore();

  return (
    <Sheet open={isOpen} onOpenChange={onToggleSideBar}>
      <SheetTrigger onClick={() => onToggleSideBar(!isOpen)}>
        <RxHamburgerMenu
          size={20}
          color="black"
          className="absolute left-5 top-5 md:hidden"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[200px] bg-white p-4">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => onToggleSideBar(false)}>
                <Image
                  src="/images/logo.png"
                  alt="logo-image"
                  width={70}
                  height={15}
                />
              </Link>
              <Avatar type="default" size="default" imgPath="" />
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <NavList />
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
