"use client";

import { useState, useEffect } from "react";
import FormInputs from "./form-inputs";
import Taxes from "./taxes";
import { useWalletModal } from "@/hooks/use-wallet-modal";
import WalletModal from "../wallet/wallet-modal";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ScadsForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [firstToken, setFirstToken] = useState("USDT");
  const [secondToken, setSecondToken] = useState("SCADS");
  const [receivalAmount, setRecivalAmount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const walletModal = useWalletModal();

  const handleSwap = () => {
    const tempToken = firstToken;
    setFirstToken(secondToken);
    setSecondToken(tempToken);
  };

  useEffect(() => {
    setRecivalAmount(inputValue * 0.97);
  }, [inputValue]);

  const textClasses = "text-white";
  const colorClasses = "text-neutral-400";

  return (
    <form className="mt-2 flex flex-col gap-y-6">
      <FormInputs
        inputValue={inputValue}
        setInputValue={setInputValue}
        panel={panel}
        handleSwap={handleSwap}
        setFirstToken={setFirstToken}
        setSecondToken={setSecondToken}
        firstToken={firstToken}
        secondToken={secondToken}
      />
      <div className={cn("flex w-full justify-between text-sm", textClasses)}>
        <p className={colorClasses}>1 SCADS = 1 USDT</p>
        <p>
          <span className={cn("pr-1", colorClasses)}>You receive:</span>
          {receivalAmount.toFixed(1)}
        </p>
      </div>
      <Taxes textClasses={textClasses} colorClasses={colorClasses} />
      {walletModal.isConnected ? (
        <Button onClick={() => {}} className="w-full">
          Swap
        </Button>
      ) : (
        <WalletModal />
      )}
    </form>
  );
};

export default ScadsForm;
