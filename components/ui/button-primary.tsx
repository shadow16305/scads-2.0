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
        " bg-custom-color hover:bg-custom-color/60 group relative rounded-[50px] px-10 py-3 text-base font-bold text-white transition-colors",
        className,
      )}
    >
      {text}
    </button>
  );
};

ButtonPrimary.displayName = "ButtonPrimary";

export default ButtonPrimary;
