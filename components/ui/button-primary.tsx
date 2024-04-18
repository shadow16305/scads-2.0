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
    <div
      onClick={onClick}
      className={cn(
        "group flex cursor-pointer items-center justify-center gap-x-2 rounded-[50px] bg-black px-8 py-2 text-base font-bold text-white transition-colors duration-300 hover:bg-neutral-800 dark:bg-custom-color dark:hover:bg-[#7480f1]",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default ButtonPrimary;
