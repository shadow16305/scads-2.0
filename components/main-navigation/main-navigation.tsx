"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "@/components/main-navigation/hamburger";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./mobile-menu";
import clsx from "clsx";
import AddressDropdown from "./address-dropdown";
import WalletModal from "../wallet/wallet-modal";
import NavLinks from "./navlinks";
import SwapModal from "../swap/swap-modal";

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
    "fixed top-0 z-50 flex w-screen items-center justify-between transition-all text-white",
    scrolled ? "bg-white/[.02] backdrop-blur-lg" : "bg-transparent",
  );

  return (
    <nav className={navClasses}>
      <div className="mx-auto flex w-full justify-between py-4 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <div className="flex min-w-full items-center justify-between gap-x-12 px-4 lg:min-w-0 lg:justify-normal lg:px-0">
          <Link
            href="/"
            className="z-50 flex items-center gap-x-2 text-xl font-bold text-white"
          >
            <Image src="/images/logo.svg" alt="logo" width={36} height={36} />{" "}
            SCADS
          </Link>
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavLinks />
        </div>
        <div className="hidden items-center gap-x-6 lg:flex">
          <AddressDropdown />
          <WalletModal navigation />
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
                  "fixed left-1/2 top-0 z-40 w-11/12 -translate-x-1/2 overflow-hidden rounded-b-3xl bg-dark-blue",
                )}
              >
                <MobileMenu close={() => setIsOpen(!isOpen)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainNavigation;
