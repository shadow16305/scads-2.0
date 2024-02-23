"use client";

import { useState, useEffect } from "react";
import Input from "./Input";
import { AiOutlineSwap } from "react-icons/ai";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const TwineForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [receivalAmount, setRecivalAmount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

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
          token="TWINE"
          setValue={setInputValue}
          value={inputValue}
          panel={panel}
          setToken={() => {}}
        />
        <div className="h-full w-[1px] bg-[#40FFD1]/10" />
        <Input
          className="items-end pb-1 pt-4 text-end"
          balanceClassName="justify-end"
          selectClassName="flex-row-reverse"
          token="SCADS"
          setToken={() => {}}
          setValue={setInputValue}
          value={inputValue}
          panel={panel}
        />
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
      <div className="flex items-center justify-center space-x-2 text-white">
        <Switch id="airplane-mode" className="bg-[#40FFD1]/10" />
        <Label htmlFor="airplane-mode">Auto-compound</Label>
      </div>
      <div className="flex flex-col items-center gap-y-4 text-sm text-white">
        <p>
          <span className="opacity-70">SCADS owned:</span> 0.00
        </p>
        <div className="flex w-full flex-col gap-y-2">
          <p className="flex justify-between">
            <span className="opacity-70">Time invested:</span> 62 Days 19 Hours
            20 Minutes
          </p>
          <p className="flex justify-between">
            <span className="opacity-70">TWINE minted:</span> 5.495
          </p>
          <p className="flex justify-between">
            <span className="opacity-70">TWINE claimed:</span> 2.745
          </p>
        </div>
      </div>
      <button
        type="button"
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

export default TwineForm;
