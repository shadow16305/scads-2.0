"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import DocumentsDropdown from "./DocumentsDropdown";
import SwapModal from "../swap/SwapModal";
import Hamburger from "./Hamburger";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { Switch } from "../ui/switch";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import ButtonPrimary from "../ui/ButtonPrimary";
import ThemeToggler from "./ThemeToggler";

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [themeCtx.isLight]);

  useEffect(() => {
    if (themeCtx.isLight) {
      document.body.classList.remove("bg-[#050A12]");
      document.body.classList.add("bg-[#F4F3F2]");
    } else {
      document.body.classList.remove("bg-[#F4F3F2]");
      document.body.classList.add("bg-[#050A12]");
    }
  }, [themeCtx.isLight]);

  return (
    <nav
      className={clsx(
        "fixed top-0 z-50 w-screen transition-all",
        scrolled
          ? themeCtx.isLight
            ? "bg-[#F4F3F2] shadow-md"
            : "bg-[#0B1018]"
          : "bg-transparent",
      )}
    >
      <div
        className={`mx-auto flex w-full max-w-sm items-center justify-between rounded-b-3xl border-b border-transparent py-4 transition-all lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]`}
      >
        <div className="flex min-w-full items-center justify-between gap-x-12 px-4 lg:min-w-0 lg:justify-normal lg:px-0">
          <Link href="/" className={clsx("z-50", themeCtx.isLight && "invert")}>
            <Image src="/images/logo.png" alt="logo" width={140} height={40} />
          </Link>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          <div
            className={clsx(
              "hidden gap-x-8 lg:flex",
              themeCtx.isLight ? "text-black" : "text-white",
            )}
          >
            <SwapModal navigation />
            <Link href="/how-to" className="group relative">
              How to
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
            </Link>
            <DocumentsDropdown />
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <ThemeToggler
            isOn={themeCtx.isLight}
            setIsOn={themeCtx.toggleTheme}
          />
          <ButtonPrimary text="Connect wallet" onClick={() => {}} />
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed left-0 top-0 z-40 w-screen overflow-hidden rounded-b-3xl bg-[#0B1018]"
            >
              <MobileMenu />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainNavigation;
