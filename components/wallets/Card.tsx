"use client";

import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface CardProps {
  number: number;
  title: string;
  description: string;
  onClick: () => void;
  className: string;
  numberClass: string;
}

const Card: React.FC<CardProps> = ({
  number,
  title,
  description,
  onClick,
  className,
  numberClass,
}) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div
      className={`${clsx("relative flex h-[260px] w-[324px] flex-col gap-y-2 rounded-xl border border-[#40FFD1]/10 pl-5 pt-4", className)}`}
    >
      <div
        className={clsx(
          "z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full",
          numberClass,
        )}
      >
        <span className="text-2xl font-medium">{number}</span>
      </div>
      <h3
        className={clsx(
          "z-10 text-xl font-semibold",
          themeCtx.isLight ? "text-black" : "text-lime",
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "z-10 max-w-[264px] opacity-70",
          themeCtx.isLight ? "text-black" : "text-white",
        )}
      >
        {description}
      </p>
      <div className="z-10 ms-auto mt-auto flex pb-4 pr-4">
        <Link
          href="#tokenomics"
          onClick={onClick}
          className="rounded-full bg-lime p-2 transition-all duration-300 hover:scale-110"
        >
          <Image
            src="/images/vuesax/link-to.svg"
            alt="link to tokenomics section"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <Image
        src="/images/grid.png"
        alt="grid"
        width={300}
        height={240}
        className={clsx(
          "absolute right-0 top-0 z-0 rounded-3xl",
          themeCtx.isLight && "hidden",
        )}
      />
    </div>
  );
};

export default Card;
