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
        "group relative rounded-[50px] bg-white/40 px-10 py-3 text-base font-bold text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-white hover:text-black dark:bg-custom-color dark:backdrop-blur-none dark:hover:bg-custom-color/60 dark:hover:text-white",
        className,
      )}
    >
      {text}
    </button>
  );
};

ButtonPrimary.displayName = "ButtonPrimary";

export default ButtonPrimary;
