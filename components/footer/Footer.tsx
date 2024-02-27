"use client";

import Image from "next/image";
import Socials from "./Socials";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const themeCtx = useContext(ThemeContext);

  return (
    <footer className="mx-auto mt-32 flex flex-col items-center justify-between pb-8 lg:max-w-[1060px] lg:flex-row lg:items-end xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <div className="flex flex-col items-center gap-y-5 lg:items-start">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={160}
          height={57}
          className={clsx(themeCtx.isLight && "invert")}
        />
        <p
          className={clsx(
            themeCtx.isLight ? "text-black" : "text-white opacity-70",
          )}
        >
          SCADS © Copyright {currentYear}. All rights reserved. ™
        </p>
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
