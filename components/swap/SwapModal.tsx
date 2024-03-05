"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext, useState } from "react";
import Image from "next/image";
import ScadsForm from "./ScadsForm";
import TwineForm from "./TwineForm";
import clsx from "clsx";
import { ThemeContext } from "@/contexts/theme-context";
import ButtonPrimary from "../ui/ButtonPrimary";

const SwapModal: React.FC<{ navigation: boolean }> = ({ navigation }) => {
  const [panel, setPanel] = useState("SCADS");
  const themeCtx = useContext(ThemeContext);

  const scadsButtonClasses = clsx(
    panel === "SCADS"
      ? themeCtx.isLight
        ? "bg-[#050A12] text-white"
        : "bg-lime text-black"
      : themeCtx.isLight
        ? "text-black shadow-md"
        : "bg-[#40FFD1]/5 text-white",
  );
  const twineButtonClasses = clsx(
    panel === "TWINE"
      ? themeCtx.isLight
        ? "bg-[#050A12] text-white"
        : "bg-lime text-black"
      : themeCtx.isLight
        ? "text-black shadow-md"
        : "bg-[#40FFD1]/5 text-white",
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {navigation ? (
          <button className="group relative">
            Invest
            <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
          </button>
        ) : (
          <ButtonPrimary text="Invest" onClick={() => {}} />
        )}
      </DialogTrigger>
      <DialogContent
        className={clsx(
          "max-w-[360px] rounded-3xl border-none md:max-w-lg",
          themeCtx.isLight ? "bg-[#F4F3F2]" : "bg-[#0A1018]",
        )}
      >
        <DialogHeader className="flex flex-col gap-y-2">
          <DialogTitle
            className={clsx(
              "text-2xl font-semibold",
              themeCtx.isLight ? "text-black" : "text-white",
            )}
          >
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
        {!themeCtx.isLight && (
          <Image
            src="/images/swap-bg.png"
            alt="swap"
            width={581}
            height={422}
            className="absolute right-0 top-0 -z-10 rounded-tr-3xl"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SwapModal;
