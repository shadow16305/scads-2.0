"use client";

import SwapModal from "./swap/SwapModal";
import Stats from "./stats/Stats";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import { IoEllipse } from "react-icons/io5";

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <section className="relative">
      <div
        className={clsx(
          "absolute left-0 top-0 z-0 w-screen lg:h-3/4",
          themeCtx.isLight
            ? "bg-gradient-to-b from-[#F4F3F2] to-lime"
            : "bg-none",
        )}
      />
      <div className="relative z-10">
        <div className="mx-auto flex justify-center pt-40 lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
          <div
            className={clsx(
              "flex max-w-[347px] flex-col items-center gap-y-8 lg:max-w-none",
              themeCtx.isLight ? "text-black" : "text-white",
            )}
          >
            <h1 className="text-center text-4xl font-bold leading-tight md:max-w-[860px] lg:text-[44px]">
              Ditch the Bankchains, Own Your Finance{" "}
              <span className={clsx(!themeCtx.isLight && "text-lime")}>
                SCADS - The Crypto DNA
              </span>
            </h1>
            <div>
              <p className="text-center lg:max-w-[550px] xl:max-w-[700px]">
                The World's First Non-Fiat Stablecoin Powered by{" "}
                <span
                  className={clsx(
                    "font-semibold",
                    !themeCtx.isLight && "text-lime",
                  )}
                >
                  Proof of Holding
                </span>
              </p>
              <p className="text-center lg:max-w-[550px] xl:max-w-[700px]">
                Mint TWINE simply by owning SCADS!
              </p>
            </div>
            <SwapModal navigation={false} />
          </div>
        </div>
        <Stats />
      </div>
      {!themeCtx.isLight && (
        <IoEllipse
          className="absolute -left-96 top-0 -z-10 -translate-y-1/2 text-lime blur-[300px]"
          size={600}
        />
      )}
      {!themeCtx.isLight && (
        <IoEllipse
          className="absolute -right-96 top-0 -z-10 -translate-y-1/2 text-lime blur-[300px]"
          size={600}
        />
      )}
    </section>
  );
};

export default Header;
