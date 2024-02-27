"use client";

import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import { useContext } from "react";

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <h4
      className={clsx(
        "rounded-3xl  px-4 py-2 text-lime",
        themeCtx.isLight ? "bg-[#0B1018]" : "bg-lime/20",
      )}
    >
      {title}
    </h4>
  );
};

export default SectionHeader;
