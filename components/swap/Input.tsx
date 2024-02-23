import Image from "next/image";
import TokenSelect from "./TokenSelect";

interface InputProps {
  className: string;
  balanceClassName: string;
  selectClassName: string;
  setToken: (token: string) => void;
  token: string;
  setValue: (value: number) => void;
  value: number;
  panel: string;
}

const Input: React.FC<InputProps> = ({
  className,
  balanceClassName,
  selectClassName,
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
    <div className={`flex h-[200px] flex-col justify-between ${className}`}>
      <div className="flex flex-col gap-y-1">
        {panel === "SCADS" ? (
          <TokenSelect
            selectClassName={selectClassName}
            setToken={setToken}
            token={token}
          />
        ) : (
          <div
            className={`flex w-fit items-center justify-between rounded-3xl border border-[#132545] px-3 py-2 ${selectClassName}`}
          >
            <div className="flex items-center gap-x-2">
              <div className="relative h-4 w-[10px]">
                <Image
                  src={`/images/currency/${token}.svg`}
                  alt="currency placeholder"
                  fill
                />
              </div>
              <span className="text-white">{token}</span>
            </div>
          </div>
        )}

        <div className={`flex gap-x-1 text-sm text-white ${balanceClassName}`}>
          <p className="opacity-70">Balance:</p>
          <span>0.00</span>
        </div>
      </div>
      <input
        type="number"
        className={`w-11/12 bg-transparent text-2xl font-bold text-white placeholder:text-white focus:outline-none ${className}`}
        placeholder="0.00"
        value={value === 0 ? "" : value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
