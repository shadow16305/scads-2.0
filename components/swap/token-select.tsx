import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
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
  setToken?: (token: string) => void;
  token: string;
}

const TokenSelect: React.FC<TokenSelectProps> = ({ setToken, token }) => {
  const tokenIconClassNames =
    (token === "USDT" && "w-5 h-5") ||
    (token === "BNB" && "h-5 w-5") ||
    (token === "SCADS" && "h-5 w-3") ||
    (token === "TWINE" && "h-5 w-3");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex w-[120px] items-center justify-between rounded-3xl border border-white/10 bg-white/[.02] px-3 py-2 lg:w-[140px]",
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className={cn("relative", tokenIconClassNames)}>
            <Image
              src={`/images/currency/${token}.svg`}
              alt="currency placeholder"
              fill
            />
          </div>
          <span className="text-white">{token}</span>
        </div>
        <FaChevronDown size={16} className="text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-2xl border-none bg-[#0c0e22] text-white">
        <DropdownMenuLabel>Select a token</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        {tokens.map((token) => (
          <DropdownMenuItem
            key={token.name}
            className="text-sm hover:bg-white/20"
            onClick={() => setToken!(token.name)}
          >
            <span>{token.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TokenSelect;
