"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import { useContext } from "react";

interface CarouselProps {
  items: {
    id: string;
    text: string;
  }[];
  onClick: (item: string) => void;
  activeText: string;
}

const TokenomicsCarousel: React.FC<CarouselProps> = ({
  items,
  onClick,
  activeText,
}) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Carousel
      opts={{
        align: "start",
        skipSnaps: true,
      }}
      className="mx-auto mt-6 w-full max-w-[300px] lg:max-w-[900px] xl:max-w-[1031px]"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            className={clsx(
              "basis-auto lg:basis-1/4 xl:basis-1/5",
              themeCtx.isLight ? "text-black" : "text-white",
            )}
          >
            <button
              onClick={() => onClick(item.text)}
              className={clsx(
                "text-nowrap rounded-3xl px-6 py-2 text-sm transition-all duration-300 lg:min-w-[182px]",
                activeText === item.text
                  ? "bg-lime font-semibold text-black"
                  : themeCtx.isLight
                    ? "bg-lime/40"
                    : "bg-[#40FFD1]/5 text-white",
              )}
            >
              {item.text}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TokenomicsCarousel;
