import clsx from "clsx";
import Input from "./Input";
import { AiOutlineSwap } from "react-icons/ai";

interface FormInputsProps {
  isLight: boolean;
  inputValue: number;
  setInputValue: (value: number) => void;
  panel: string;
  handleSwap?: () => void;
  setFirstToken?: (token: string) => void;
  firstToken: string;
  setSecondToken?: (token: string) => void;
  secondToken: string;
}

const FormInputs: React.FC<FormInputsProps> = ({
  isLight,
  inputValue,
  setInputValue,
  panel,
  handleSwap,
  setFirstToken,
  firstToken,
  setSecondToken,
  secondToken,
}) => {
  return (
    <div
      className={clsx(
        "relative flex h-full justify-between rounded-3xl border px-4 lg:w-[460px]",
        isLight
          ? "border-black bg-transparent"
          : "border-[#40FFD1]/10 bg-[#0A1018]",
      )}
    >
      <Input
        className={clsx(
          "items-start pb-1 pt-4",
          isLight
            ? "text-black placeholder:text-black"
            : "text-white placeholder:text-white",
        )}
        balanceClassName={clsx(
          "justify-start",
          isLight ? "text-black" : "text-white",
        )}
        selectClassName={clsx(
          "flex-row",
          isLight
            ? "text-black border-black"
            : "text-white border-[#40FFD1]/10",
        )}
        tokenClassName={clsx(isLight ? "text-black" : "text-white")}
        setToken={setFirstToken}
        token={firstToken}
        setValue={setInputValue}
        value={inputValue}
        panel={panel}
        isLight={isLight}
      />
      <div
        className={clsx(
          "h-full w-[1px]",
          isLight ? "bg-[#050A12]" : "bg-[#40FFD1]/10",
        )}
      />
      {panel === "SCADS" && (
        <button
          type="button"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#40FFD1]/10 bg-[#0A1018] p-1 text-white transition hover:text-lime"
          onClick={handleSwap}
        >
          <AiOutlineSwap size={24} />
        </button>
      )}
      <Input
        className={clsx(
          "items-end pb-1 pt-4 text-end",
          isLight
            ? "text-black placeholder:text-black"
            : "text-white placeholder:text-white",
        )}
        balanceClassName={clsx(
          "justify-end",
          isLight ? "text-black" : "text-white",
        )}
        selectClassName={clsx(
          "flex-row-reverse",
          isLight
            ? "text-black border-black"
            : "text-white border-[#40FFD1]/10",
        )}
        tokenClassName={clsx(isLight ? "text-black" : "text-white")}
        setToken={setSecondToken}
        token={secondToken}
        setValue={setInputValue}
        value={inputValue}
        panel={panel}
        isLight={isLight}
      />
    </div>
  );
};

export default FormInputs;
