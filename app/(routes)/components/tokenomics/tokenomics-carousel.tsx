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
                "text-nowrap rounded-3xl px-2 py-2 text-xs transition-all duration-300 lg:min-w-[182px]",
                activeText === item.text
                  ? "border border-custom-color/60 bg-custom-color/40 text-white"
                  : "border border-white/5 bg-white/[.02] text-white",
              )}
            >
              {item.text}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={arrowClasses} />
      <CarouselNext className={arrowClasses} />
    </Carousel>
  );
};

export default TokenomicsCarousel;
