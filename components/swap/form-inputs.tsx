import clsx from "clsx";
import Input from "./input";
import { AiOutlineSwap } from "react-icons/ai";

interface FormInputsProps {
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
    <div className="relative flex h-full justify-between rounded-3xl border border-black bg-transparent px-4 dark:border-white/10 lg:w-[460px]">
      <Input
        className={clsx(
          "items-start pb-1 pt-4 text-black placeholder:text-black dark:text-white dark:placeholder:text-white",
        )}
        balanceClassName={clsx("justify-start text-black dark:text-white")}
        selectClassName="flex-row text-black border-black dark:text-white dark:border-[#40FFD1]/10"
        tokenClassName="text-black dark:text-white"
        setToken={setFirstToken}
        token={firstToken}
        setValue={setInputValue}
        value={inputValue}
        panel={panel}
      />
      <div className="h-full w-[1px] bg-[#050A12] dark:bg-[#40FFD1]/10" />
      {panel === "SCADS" && (
        <button
          type="button"
          className="hover:text-custom-color absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#40FFD1]/10 bg-[#0A1018] p-1 text-white transition"
          onClick={handleSwap}
        >
          <AiOutlineSwap size={24} />
        </button>
      )}
      <Input
        className="items-end pb-1 pt-4 text-end text-black placeholder:text-black dark:text-white dark:placeholder:text-white"
        balanceClassName="justify-end text-black dark:text-white"
        selectClassName="flex-row-reverse text-black border-black dark:text-white dark:border-[#40FFD1]/10"
        tokenClassName="text-black dark:text-white"
        setToken={setSecondToken}
        token={secondToken}
        setValue={setInputValue}
        value={inputValue}
        panel={panel}
      />
    </div>
  );
};

export default FormInputs;
