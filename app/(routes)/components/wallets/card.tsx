import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  number: number;
  title: string;
  description: string;
  onClick: () => void;
  className: string;
  numberClass: string;
  shortcutClass: string;
}

const Card: React.FC<CardProps> = ({
  number,
  title,
  description,
  onClick,
  className,
  numberClass,
  shortcutClass,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[260px] w-[324px] flex-col gap-y-2 rounded-xl border border-[#40FFD1]/10 pl-5 pt-4",
        className,
      )}
    >
      <div
        className={cn(
          "z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full",
          numberClass,
        )}
      >
        <span className="text-2xl font-medium">{number}</span>
      </div>
      <h3 className="z-10 text-xl font-semibold text-black dark:text-lime">
        {title}
      </h3>
      <p className="z-10 max-w-[264px] dark:text-white dark:opacity-70">
        {description}
      </p>
      <div className="z-10 ms-auto mt-auto flex pb-4 pr-4">
        <Link
          href="#tokenomics"
          onClick={onClick}
          className={cn(
            "rounded-full p-2 transition-all duration-300 hover:scale-110",
            shortcutClass,
          )}
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
        width={200}
        height={240}
        className="absolute right-0 top-0 z-0 hidden rounded-3xl dark:block"
      />
    </div>
  );
};

export default Card;
