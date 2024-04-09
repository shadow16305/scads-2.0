"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import ScadsForm from "./scads-form";
import TwineForm from "./twine-form";
import clsx from "clsx";
import ButtonPrimary from "../ui/button-primary";

const SwapModal: React.FC<{ navigation: boolean }> = ({ navigation }) => {
  const [panel, setPanel] = useState("SCADS");

  const scadsButtonClasses = clsx(
    panel === "SCADS"
      ? "bg-[#050A12] text-white dark:bg-lime dark:text-black"
      : "text-black shadow-md dark:bg-[#40FFD1]/5 dark:text-white",
  );
  const twineButtonClasses = clsx(
    panel === "TWINE"
      ? "bg-[#050A12] text-white dark:bg-lime dark:text-black"
      : "text-black shadow-md dark:bg-[#40FFD1]/5 dark:text-white",
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {navigation ? (
          <button type="button" className="group relative">
            Invest
            <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
          </button>
        ) : (
          <ButtonPrimary text="Invest" onClick={() => {}} />
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[360px] rounded-3xl border-none bg-[#F4F3F2] dark:bg-[#0A1018] md:max-w-lg">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-semibold text-black dark:text-white">
            Swap
          </DialogTitle>
          <div className="flex gap-x-4">
            <button
              onClick={() => setPanel("SCADS")}
              className={`rounded-3xl px-6 py-1 text-sm font-semibold transition-colors duration-300 ${scadsButtonClasses}`}
            >
              SCADS
            </button>
            <button
              onClick={() => setPanel("TWINE")}
              className={`rounded-3xl px-6 py-1 text-sm font-semibold transition-colors duration-300 ${twineButtonClasses}`}
            >
              TWINE
            </button>
          </div>
        </DialogHeader>
        {panel === "SCADS" ? (
          <ScadsForm panel={panel} />
        ) : (
          <TwineForm panel={panel} />
        )}
        <Image
          src="/images/swap-bg.png"
          alt="swap"
          width={581}
          height={422}
          className="absolute right-0 top-0 -z-10 hidden rounded-tr-3xl dark:block"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SwapModal;
