import Image from "next/image";
import Link from "next/link";

interface CardProps {
  number: number;
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ number, title, description, onClick }) => {
  return (
    <div className="relative flex h-[260px] w-[324px] flex-col gap-y-2 rounded-3xl border border-[#101F3E] pl-5 pt-4">
      <div className="z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-lime/20">
        <span className="text-2xl font-medium text-lime">{number}</span>
      </div>
      <h3 className="z-10 text-xl font-semibold text-lime">{title}</h3>
      <p className="z-10 max-w-[264px] text-white opacity-70">{description}</p>
      <div className="z-10 ms-auto mt-auto flex pb-4 pr-4">
        <Link
          href="#tokenomics"
          onClick={onClick}
          className="rounded-full bg-lime p-1"
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
        className="absolute right-0 top-0 z-0 rounded-3xl"
      />
    </div>
  );
};

export default Card;
