"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";

import Treasury from "./Treasury";
import GeneralStats from "./GeneralStats";

const Stats = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        "mx-auto mt-24 flex flex-col gap-y-28 rounded-3xl bg-[#050A12] px-4 md:px-0 lg:w-full lg:max-w-[1100px] lg:gap-y-20 xl:max-w-[1240px] 2xl:max-w-[1340px]",
        themeCtx.isLight ? "bg-[#F4F3F2] shadow-md" : "bg-[#050A12]",
      )}
    >
      <GeneralStats isLight={themeCtx.isLight} />
      <Treasury isLight={themeCtx.isLight} />
    </div>
  );
};

export default Stats;
