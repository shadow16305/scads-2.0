"use client";

import { useState, useEffect, useContext } from "react";
import Input from "./Input";
import { AiOutlineSwap } from "react-icons/ai";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import ButtonPrimary from "../ui/ButtonPrimary";
import FormInputs from "./FormInputs";
import Taxes from "./Taxes";

const ScadsForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [firstToken, setFirstToken] = useState("USDT");
  const [secondToken, setSecondToken] = useState("SCADS");
  const [receivalAmount, setRecivalAmount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const themeCtx = useContext(ThemeContext);

  const handleSwap = () => {
    const tempToken = firstToken;
    setFirstToken(secondToken);
    setSecondToken(tempToken);
  };

  useEffect(() => {
    setRecivalAmount(inputValue * 0.97);
  }, [inputValue]);

  const textClasses = clsx(themeCtx.isLight ? "text-black" : "text-white");
  const opacityClasses = clsx(themeCtx.isLight ? "opacity-100" : "oapcity-70");

  return (
    <form className="mt-2 flex flex-col gap-y-6">
      <FormInputs
        isLight={themeCtx.isLight}
        inputValue={inputValue}
        setInputValue={setInputValue}
        panel={panel}
        handleSwap={handleSwap}
        setFirstToken={setFirstToken}
        setSecondToken={setSecondToken}
        firstToken={firstToken}
        secondToken={secondToken}
      />
      <div className={`flex w-full justify-between text-sm ${textClasses}`}>
        <p className={opacityClasses}>1 SCADS = 1 USDT</p>
        <p>
          <span className={`pr-1 ${opacityClasses}`}>You receive:</span>
          {receivalAmount.toFixed(1)}
        </p>
      </div>
      <Taxes textClasses={textClasses} opacityClasses={opacityClasses} />
      <ButtonPrimary text="Connect wallet" onClick={() => {}} />
    </form>
  );
};

export default ScadsForm;
