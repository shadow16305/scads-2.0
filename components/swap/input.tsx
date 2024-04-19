import Image from "next/image";
import TokenSelect from "./token-select";
import { cn } from "@/lib/utils";

interface InputProps {
  className: string;
  balanceClassName: string;
  selectClassName: string;
  tokenClassName: string;
  setToken?: (token: string) => void;
  token: string;
  setValue: (value: number) => void;
  value: number;
  panel: string;
}

const Input: React.FC<InputProps> = ({
  className,
  balanceClassName,
  selectClassName,
  tokenClassName,
  setToken,
  token,
  setValue,
  value,
  panel,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue === "" ? 0 : Number(inputValue));
  };

  return (
    <div
      className={`flex flex-col justify-between lg:h-[140px] 2xl:h-[200px] ${className}`}
    >
      <div className="flex flex-col gap-y-1">
        {panel === "scads" ? (
          <TokenSelect setToken={setToken} token={token} />
        ) : (
          <div className="flex w-fit flex-row items-center justify-between rounded-3xl border border-black px-4 py-2 text-black dark:border-white/10 dark:text-white">
            <div className="flex items-center gap-x-2">
              <div className="relative h-4 w-[10px]">
                <Image
                  src={`/images/currency/${token}.svg`}
                  alt="currency placeholder"
                  fill
                  className={cn(
                    (token === "SCADS" || token === "TWINE") &&
                      "invert dark:invert-0",
                  )}
                />
              </div>
              <span className={tokenClassName}>{token}</span>
            </div>
          </div>
        )}
        <div className={`flex gap-x-1 text-sm ${balanceClassName}`}>
          <p className="opacity-70">Balance:</p>
          <span>0.00</span>
        </div>
      </div>
      <input
        type="number"
        className={`w-11/12 bg-transparent text-2xl font-bold focus:outline-none ${className}`}
        placeholder="0.00"
        value={value === 0 ? "" : value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
