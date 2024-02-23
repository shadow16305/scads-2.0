import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <Carousel
      opts={{
        align: "start",
        skipSnaps: true,
      }}
      className="mx-auto mt-6 w-full lg:max-w-[900px] xl:max-w-[1031px]"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="lg:basis-1/4 xl:basis-1/5">
            <button
              onClick={() => onClick(item.text)}
              className={`min-w-[182px] rounded-3xl px-6 py-2 text-sm transition-all duration-300 ${activeText === item.text ? "bg-lime font-semibold text-black" : " bg-[#40FFD1]/5 text-white"}`}
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
