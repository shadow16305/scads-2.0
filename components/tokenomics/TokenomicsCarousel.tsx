import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";

interface CarouselProps {
  items: {
    id: string;
    text: string;
  }[];
  onClick: (item: string) => void;
  activeText: string;
  isLight: boolean;
}

const TokenomicsCarousel: React.FC<CarouselProps> = ({
  items,
  onClick,
  activeText,
  isLight,
}) => {
  const arrowClasses = clsx(
    "z-10 border-none bg-transparent shadow-none ring-0",
    isLight ? "text-black" : "text-white",
  );

  return (
    <Carousel
      opts={{
        align: "start",
        skipSnaps: true,
      }}
      className="relative mx-auto mt-6 w-full max-w-[260px] lg:max-w-[900px] xl:max-w-[1031px]"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            className={clsx(
              "basis-auto lg:basis-1/4 xl:basis-1/5",
              isLight ? "text-black" : "text-white",
            )}
          >
            <button
              onClick={() => onClick(item.text)}
              className={clsx(
                "text-nowrap rounded-3xl px-6 py-2 text-sm transition-all duration-300 lg:min-w-[182px]",
                activeText === item.text
                  ? "bg-lime font-semibold text-black"
                  : isLight
                    ? "bg-lime/40"
                    : "bg-[#40FFD1]/5 text-white",
              )}
            >
              {item.text}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={arrowClasses} />
      <CarouselNext className={arrowClasses} />
      <div
        className={clsx(
          "absolute -right-4 top-0 h-full w-8 bg-gradient-to-r from-transparent lg:hidden",
          isLight ? "via-[#F4F3F2] to-[#F4F3F2]" : "via-[#0B1018] to-[#0B1018]",
        )}
      />
      <div
        className={clsx(
          "absolute -left-4 top-0 h-full w-8 bg-gradient-to-l from-transparent lg:hidden",
          isLight ? "via-[#F4F3F2] to-[#F4F3F2]" : "via-[#0B1018] to-[#0B1018]",
        )}
      />
    </Carousel>
  );
};

export default TokenomicsCarousel;
