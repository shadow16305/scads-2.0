"use client";

import { forwardRef, useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";

interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const ButtonPrimary: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ onClick, text }, ref) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={clsx(
        "group relative rounded-[50px] border-2 px-10 py-3 font-bold transition-colors",
        themeCtx.isLight
          ? "border-black text-white hover:text-black"
          : "border-lime text-black hover:text-lime",
      )}
    >
      <span className="relative z-10 ">{text}</span>
      <div
        className={clsx(
          "absolute left-0 top-0 h-full w-full scale-[1.03] rounded-3xl transition-all duration-300 group-hover:scale-0 group-hover:opacity-0",
          themeCtx.isLight ? "bg-[#050A12]" : "bg-lime",
        )}
      />
    </button>
  );
});

ButtonPrimary.displayName = "ButtonPrimary";

export default ButtonPrimary;
