"use client";

import { useState, useContext } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import clsx from "clsx";
import { ThemeContext } from "@/contexts/theme-context";
import ButtonPrimary from "../ui/ButtonPrimary";
import FormInputs from "./FormInputs";
import Taxes from "./Taxes";

const TwineForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [inputValue, setInputValue] = useState(0);
  const themeCtx = useContext(ThemeContext);

  const textClasses = clsx(themeCtx.isLight ? "text-black" : "text-white");
  const opacityClasses = clsx(themeCtx.isLight ? "opacity-100" : "oapcity-70");

  return (
    <form className="mt-2 flex flex-col gap-y-6">
      <FormInputs
        isLight={themeCtx.isLight}
        inputValue={inputValue}
        setInputValue={setInputValue}
        panel={panel}
        firstToken="TWINE"
        secondToken="SCADS"
      />
      <Taxes textClasses={textClasses} opacityClasses={opacityClasses} />
      <ButtonPrimary text="Connect wallet" onClick={() => {}} />
      <div className="flex items-center justify-center space-x-2 text-white">
        <Switch
          id="airplane-mode"
          className={clsx(themeCtx.isLight ? "bg-black" : "bg-[#40FFD1]/10")}
        />
        <Label htmlFor="airplane-mode" className={textClasses}>
          Auto-compound
        </Label>
      </div>
      <div
        className={clsx(
          "flex flex-col items-center gap-y-4 text-sm",
          textClasses,
        )}
      >
        <p>
          <span className={opacityClasses}>SCADS owned:</span> 0.00
        </p>
        <div className="flex w-full flex-col gap-y-2">
          <p className="flex justify-between">
            <span className={opacityClasses}>Time invested:</span> 62 Days 19
            Hours 20 Minutes
          </p>
          <p className="flex justify-between">
            <span className={opacityClasses}>TWINE minted:</span> 5.495
          </p>
          <p className="flex justify-between">
            <span className={opacityClasses}>TWINE claimed:</span> 2.745
          </p>
        </div>
      </div>
      <ButtonPrimary text="Connect wallet" onClick={() => {}} />
    </form>
  );
};

export default TwineForm;
