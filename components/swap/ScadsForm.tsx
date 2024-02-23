"use client";

import { useState, useEffect } from "react";
import Input from "./Input";
import { AiOutlineSwap } from "react-icons/ai";

const ScadsForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [firstToken, setFirstToken] = useState("USDT");
  const [secondToken, setSecondToken] = useState("SCADS");
  const [receivalAmount, setRecivalAmount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleSwap = () => {
    const tempToken = firstToken;
    setFirstToken(secondToken);
    setSecondToken(tempToken);
  };

  useEffect(() => {
    setRecivalAmount(inputValue * 0.97);
  }, [inputValue]);

  return (
    <form className="mt-2 flex flex-col gap-y-6">
      <div className="relative flex h-full justify-between rounded-3xl border border-[#40FFD1]/10 bg-[#0A1018] px-4 lg:w-[460px]">
        <Input
          className="items-start pb-1 pt-4"
          balanceClassName="justify-start"
          selectClassName="flex-row"
          setToken={setFirstToken}
          token={firstToken}
          setValue={setInputValue}
          value={inputValue}
          panel={panel}
        />
        <div className="h-full w-[1px] bg-[#40FFD1]/10" />
        <button
          type="button"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#40FFD1]/10 bg-[#0A1018] p-1 text-white transition hover:text-lime"
          onClick={handleSwap}
        >
          <AiOutlineSwap size={24} />
        </button>
        <Input
          className="items-end pb-1 pt-4 text-end"
          balanceClassName="justify-end"
          selectClassName="flex-row-reverse"
          setToken={setSecondToken}
          token={secondToken}
          setValue={setInputValue}
          value={inputValue}
          panel={panel}
        />
      </div>
      <div className="flex w-full justify-between text-sm text-white ">
        <p className="opacity-70">1 SCADS = 1 USDT</p>

        <p>
          <span className="pr-1 opacity-70">You receive:</span>
          {receivalAmount.toFixed(1)}
        </p>
      </div>
      <div className="flex justify-between text-sm text-white">
        <p>
          <span className="opacity-70">Gas:</span> 0.05%
        </p>
        <p>
          <span className="opacity-70">Slippage:</span> 3%
        </p>
        <p>
          <span className="opacity-70">Tax:</span> 3%
        </p>
      </div>
      <button
        type="submit"
        className="group relative rounded-[50px] border-2 border-lime px-4 py-3 font-bold"
      >
        <span className="relative z-10 transition-colors group-hover:text-lime">
          Connect wallet
        </span>
        <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-lime transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
      </button>
    </form>
  );
};

export default ScadsForm;
