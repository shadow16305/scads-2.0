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
        "mx-auto mt-32 flex flex-col gap-y-8 rounded-3xl bg-[#050A12] p-8 lg:w-full lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]",
        themeCtx.isLight ? "bg-[#F4F3F2] shadow-md" : "bg-[#050A12]",
      )}
    >
      <GeneralStats />
      <Treasury />
    </div>
  );
};

export default Stats;
