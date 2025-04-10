"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-between items-center my-10 relative">
      <Link href="/">
        <Image
          src="./images/logo.png"
          alt="Logo"
          fill
          className="!w-[200px] !h-[40px]"
        />
      </Link>

      <ul
        role="list"
        className={`${showMenu ? "opacity-100 flex" : "opacity-0 hidden"} md:flex md:opacity-100 flex-col md:flex-row items-center gap-8 bg-[#F7F6FF] md:bg-transparent absolute md:relative py-10 md:py-0 top-11 md:top-0 -left-5 md:left-0 -right-5 md:right-0 overflow-x-hidden h-[calc(100vh-200px)] md:h-auto transition-opacity ease-in-out duration-300 delay-100 z-20`}
      >
        <li>
          <Link href="#features" className="nav-item">
            Features
          </Link>
        </li>

        <li>
          <Link href="#about" className="nav-item">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#services-overview" className="nav-item">
            Services
          </Link>
        </li>

        <li>
          <Button
            className="cursor-pointer h-10 !font-medium uppercase tracking-wide"
            onClick={() => router.push("/contact")}
          >
            Be a client
          </Button>
        </li>
      </ul>
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <Image src="/icons/menu.png" alt="menu" width={24} height={24} />
      </button>
    </header>
  );
};
export default Navbar;
