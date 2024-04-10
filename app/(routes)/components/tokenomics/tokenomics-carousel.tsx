import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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
  const arrowClasses =
    "z-10 border-none bg-transparent shadow-none ring-0 text-black dark:text-white";

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
            className="basis-auto text-black dark:text-white lg:basis-1/4 xl:basis-1/5"
          >
            <button
              onClick={() => onClick(item.text)}
              className={cn(
                "text-nowrap rounded-3xl px-6 py-2 text-sm transition-all duration-300 lg:min-w-[182px]",
                activeText === item.text
                  ? "bg-custom-color font-semibold text-black"
                  : "bg-custom-color/40 dark:bg-[#40FFD1]/5 dark:text-white",
              )}
            >
              {item.text}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={arrowClasses} />
      <CarouselNext className={arrowClasses} />
      <div className="absolute -right-4 top-0 h-full w-8 bg-gradient-to-r from-transparent via-[#F4F3F2] to-[#F4F3F2] dark:via-[#0B1018] dark:to-[#0B1018] lg:hidden" />
      <div className="absolute -left-4 top-0 h-full w-8 bg-gradient-to-l from-transparent via-[#F4F3F2] to-[#F4F3F2] dark:via-[#0B1018] dark:to-[#0B1018] lg:hidden" />
    </Carousel>
  );
};

export default TokenomicsCarousel;
