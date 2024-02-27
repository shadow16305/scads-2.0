"use client";

import SwapModal from "./swap/SwapModal";
import Stats from "./stats/Stats";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <section className="relative">
      <div
        className={clsx(
          "absolute left-0 top-0 z-0 w-screen lg:h-3/4",
          themeCtx.isLight
            ? "bg-gradient-to-b from-[#F4F3F2] to-lime"
            : "bg-gradient-to-b from-[#050A12] to-lime/10",
        )}
      />
      <div className="relative z-10">
        <div className="mx-auto flex justify-center pt-40 lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
          <div
            className={clsx(
              "flex max-w-[347px] flex-col items-center gap-y-10 lg:max-w-none",
              themeCtx.isLight ? "text-black" : "text-white",
            )}
          >
            <h1 className="text-center text-4xl font-medium leading-snug md:max-w-[700px] lg:text-[44px] xl:text-[56px]">
              Save and grow your capital with{" "}
              <span className={clsx(!themeCtx.isLight && "text-lime")}>
                money you own
              </span>
            </h1>
            <p className="text-center lg:max-w-[550px] xl:max-w-[700px]">
              Truly decentralized, non-governed money created for you. The only
              asset that brings stability and confidence, can’t be hacked or
              dumped. Mint TWINE that grows in time. Brings stability and
              confidence to Crypto holders, traders, investors and institutional
              organizations.
            </p>
            <SwapModal navigation={false} />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Header;
