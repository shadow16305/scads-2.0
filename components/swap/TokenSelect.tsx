import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

const tokens = [
  {
    name: "BNB",
  },
  {
    name: "SCADS",
  },
  {
    name: "TWINE",
  },
  {
    name: "USDC",
  },
  {
    name: "USDT",
  },
];

interface TokenSelectProps {
  selectClassName: string;
  tokenClassName: string;
  setToken?: (token: string) => void;
  token: string;
}

const TokenSelect: React.FC<TokenSelectProps> = ({
  selectClassName,
  tokenClassName,
  setToken,
  token,
}) => {
  const tokenIconClassNames =
    (token === "USDT" && "w-5 h-5") ||
    (token === "BNB" && "h-5 w-5") ||
    (token === "SCADS" && "h-5 w-3") ||
    (token === "TWINE" && "h-5 w-3");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={`flex w-[140px] items-center justify-between rounded-3xl border border-[#132545] px-3 py-2 ${selectClassName}`}
        >
          <div className="flex items-center gap-x-2">
            <div className={`relative ${tokenIconClassNames}`}>
              <Image
                src={`/images/currency/${token}.svg`}
                alt="currency placeholder"
                fill
              />
            </div>
            <span className={tokenClassName}>{token}</span>
          </div>
          <FaChevronDown size={16} className={tokenClassName} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-2xl border-none bg-[#050A12] text-white">
        <DropdownMenuLabel>Select a token</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#40FFD1]/10" />
        {tokens.map((token) => (
          <DropdownMenuItem
            key={token.name}
            className="group relative hover:text-black"
            onClick={() => setToken!(token.name)}
          >
            <span className="z-10">{token.name}</span>
            <span className="absolute left-0 top-0 h-full w-0 rounded-r-2xl bg-lime transition-all duration-300 group-hover:w-full" />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TokenSelect;
