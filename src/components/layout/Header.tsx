import Image from "next/image";
import { useState } from "react";
import { MdLogin } from "react-icons/md";

import NavList from "../navigations/NavList";
import SideBar from "../navigations/SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex h-[60px] w-full items-center justify-center bg-white md:justify-start">
      <SideBar isOpen={isOpen} onToggle={toggleSideBar} />
      <div className="base-wrap flex justify-between md:w-full md:px-4 lg:p-0">
        <div className="flex items-center">
          <Image
            className="md:mr-16"
            src="/images/logo.png"
            alt="logo-image"
            width={70}
            height={15}
          />
          <div className="hidden md:flex">
            <NavList />
          </div>
        </div>
        <MdLogin size={20} className="hidden md:block" />
      </div>
    </header>
  );
};

export default Header;
