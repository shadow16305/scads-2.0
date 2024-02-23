"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DocumentsDropdown from "./DocumentsDropdown";
import SwapModal from "../swap/SwapModal";

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-0 z-50 flex w-full -translate-x-1/2 items-center justify-between rounded-b-3xl border-b border-transparent py-4 transition-all lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px] ${scrolled && "border-[#101F3E] bg-[#0B1018] px-4"}`}
    >
      <div className="flex items-center gap-x-12">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={140} height={40} />
        </Link>
        <div className="flex gap-x-8 text-white">
          <SwapModal navigation />
          <Link href="/how-to" className="group relative">
            How to
            <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
          </Link>
          <DocumentsDropdown />
        </div>
      </div>
      <button className="group relative rounded-[50px] border-2 border-lime px-4 py-3 font-bold">
        <span className="relative z-10 transition-colors group-hover:text-lime">
          Connect wallet
        </span>
        <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-lime transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
      </button>
    </nav>
  );
};

export default MainNavigation;
