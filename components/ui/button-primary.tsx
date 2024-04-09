"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ onClick, text, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative rounded-[50px] border-2 border-black px-10 py-3 text-base font-bold text-white transition-colors hover:bg-transparent hover:text-black dark:border-lime dark:text-black dark:hover:text-lime",
        className,
      )}
    >
      <span className="relative z-10 ">{text}</span>
      <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-[#050A12] transition-all duration-300 group-hover:scale-0 group-hover:opacity-0 dark:bg-lime" />
    </button>
  );
};

ButtonPrimary.displayName = "ButtonPrimary";

export default ButtonPrimary;
