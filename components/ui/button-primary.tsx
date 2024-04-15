"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
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
        "group flex items-center justify-center gap-x-2 rounded-[50px] bg-black px-8 py-2 text-base font-bold text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-neutral-800 dark:bg-custom-color dark:backdrop-blur-none dark:hover:bg-[#7480f1] dark:hover:text-white",
        className,
      )}
    >
      {text}
      <svg
        className="hidden lg:block"
        width="14"
        height="14"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="-translate-x-[3px] transition-transform group-hover:translate-x-0"
          d="M8 15L14 8.5L8 2"
          stroke="currentColor"
          stroke-width="3"
        />
        <line
          className="opacity-0 transition-opacity group-hover:opacity-100"
          x1="13"
          y1="8.5"
          y2="8.5"
          stroke="currentColor"
          stroke-width="3"
        />
      </svg>
    </button>
  );
};

ButtonPrimary.displayName = "ButtonPrimary";

export default ButtonPrimary;
