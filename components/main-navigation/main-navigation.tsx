"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DocumentsDropdown from "./documents-dropdown";
import SwapModal from "../swap/swap-modal";
import Hamburger from "@/components/main-navigation/hamburger";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./mobile-menu";
import clsx from "clsx";
import ButtonPrimary from "../ui/button-primary";
import ThemeToggler from "./theme-toggler";
import AddressDropdown from "./address-dropdown";
import WalletModal from "../wallet/wallet-modal";

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  const navClasses = clsx(
    "fixed lg:left-1/2 top-0 z-50 flex w-full max-w-sm lg:-translate-x-1/2 items-center justify-between rounded-[50px] border-b border-transparent px-4 py-4 transition-all lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]",
    scrolled ? "bg-[#F4F3F2] shadow-md dark:bg-[#0B1018]" : "bg-transparent",
    scrolled && "top-2",
  );

  return (
    <nav className={navClasses}>
      <div className="flex min-w-full items-center justify-between gap-x-12 px-4 lg:min-w-0 lg:justify-normal lg:px-0">
        <Link href="/" className="z-50 invert dark:invert-0">
          <Image src="/images/logo.png" alt="logo" width={140} height={40} />
        </Link>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="hidden gap-x-8 text-black dark:text-white lg:flex">
          <SwapModal navigation />
          <Link href="/how-to" className="group relative">
            How to
            <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
          </Link>
          <DocumentsDropdown />
        </div>
      </div>
      <div className="hidden items-center gap-x-6 lg:flex">
        <AddressDropdown />
        <ThemeToggler />
        <WalletModal />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(!isOpen)}
              className="fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              className={clsx(
                "fixed left-1/2 top-0 z-40 w-11/12 -translate-x-1/2 overflow-hidden rounded-b-3xl bg-[#E9E8E7] dark:bg-[#0B1018]",
              )}
            >
              <MobileMenu close={() => setIsOpen(!isOpen)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavigation;