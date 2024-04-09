"use client";

import { useState, useEffect } from "react";
import ButtonPrimary from "../ui/button-primary";
import FormInputs from "./form-inputs";
import Taxes from "./taxes";
import { useWalletModal } from "@/hooks/use-wallet-modal";
import WalletModal from "../wallet/wallet-modal";

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

  const textClasses = "text-black dark:text-white";
  const opacityClasses = "opacity-100 dark:opacity-70";

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
      <div className={`flex w-full justify-between text-sm ${textClasses}`}>
        <p className={opacityClasses}>1 SCADS = 1 USDT</p>
        <p>
          <span className={`pr-1 ${opacityClasses}`}>You receive:</span>
          {receivalAmount.toFixed(1)}
        </p>
      </div>
      <Taxes textClasses={textClasses} opacityClasses={opacityClasses} />
      {walletModal.isConnected ? (
        <ButtonPrimary text="Swap" onClick={() => {}} />
      ) : (
        <WalletModal />
      )}
    </form>
  );
};

export default ScadsForm;
