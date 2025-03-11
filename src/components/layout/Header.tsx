"use client";

import Image from "next/image";
import Link from "next/link";
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
    <header className="fixed left-0 top-0 flex h-[60px] w-full items-center justify-center bg-white md:justify-start">
      <SideBar isOpen={isOpen} onToggle={toggleSideBar} />
      <div className="base-wrap flex justify-between">
        <div className="flex items-center">
          <Link href="/" className="md:mr-16">
            <Image
              src="/images/logo.png"
              alt="logo-image"
              width={70}
              height={15}
            />
          </Link>
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
