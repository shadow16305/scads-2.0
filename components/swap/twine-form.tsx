"use client";

import { useState } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import clsx from "clsx";
import ButtonPrimary from "../ui/button-primary";
import FormInputs from "./form-inputs";
import Taxes from "./taxes";
import { useWalletModal } from "@/hooks/use-wallet-modal";
import WalletModal from "../wallet/wallet-modal";
import { Button } from "../ui/button";

const TwineForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [inputValue, setInputValue] = useState(0);
  const walletModal = useWalletModal();

  const textClasses = "text-black dark:text-white";
  const colorClasses = "opacity-100 dark:opacity-70";

  return (
    <form className="mt-2 flex flex-col gap-y-4 2xl:gap-y-6">
      <FormInputs
        inputValue={inputValue}
        setInputValue={setInputValue}
        panel={panel}
        firstToken="TWINE"
        secondToken="SCADS"
      />
      <Taxes textClasses={textClasses} colorClasses={colorClasses} />
      {walletModal.isConnected ? (
        <Button onClick={() => {}}>Swap</Button>
      ) : (
        <WalletModal />
      )}
      <div className="flex items-center justify-center space-x-2 text-white">
        <Switch id="airplane-mode" className="bg-[#050A12] dark:bg-white/5" />
        <Label htmlFor="airplane-mode" className={textClasses}>
          Auto-compound
        </Label>
      </div>
      <div
        className={clsx(
          "flex flex-col items-center gap-y-2 text-sm",
          textClasses,
        )}
      >
        <p>
          <span className={colorClasses}>SCADS owned:</span> 0.00
        </p>
        <div className="w-full space-y-2">
          <p className="flex justify-between">
            <span className={colorClasses}>Time invested:</span> 62 Days 19
            Hours 20 Minutes
          </p>
          <p className="flex justify-between">
            <span className={colorClasses}>TWINE minted:</span> 5.495
          </p>
          <p className="flex justify-between">
            <span className={colorClasses}>TWINE claimed:</span> 2.745
          </p>
        </div>
      </div>
      {walletModal.isConnected ? (
        <Button onClick={() => {}}>Claim</Button>
      ) : (
        <WalletModal />
      )}
    </form>
  );
};

export default TwineForm;
