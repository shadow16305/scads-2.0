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
import ScadsForm from "./ScadsForm";
import TwineForm from "./TwineForm";

const SwapModal: React.FC<{ navigation: boolean }> = ({ navigation }) => {
  const [panel, setPanel] = useState("SCADS");

  return (
    <Dialog>
      <DialogTrigger asChild>
        {navigation ? (
          <button className="group relative">
            Swap
            <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
          </button>
        ) : (
          <button className="group relative rounded-[50px] border-2 border-lime px-10 py-3 font-bold">
            <span className="relative z-10 text-black transition-colors group-hover:text-lime">
              Swap
            </span>
            <div
              className={
                "absolute left-0 top-0 h-full w-full rounded-3xl bg-lime transition-all duration-300 group-hover:scale-0 group-hover:opacity-0"
              }
            />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="border-none bg-[#0A1018]">
        <DialogHeader className="flex flex-col gap-y-2">
          <DialogTitle className="text-2xl font-semibold text-white">
            Swap
          </DialogTitle>
          <div className="flex gap-x-4">
            <button
              onClick={() => setPanel("SCADS")}
              className={`rounded-3xl px-6 py-1 text-sm font-semibold transition-colors duration-300 ${panel === "SCADS" ? "bg-lime text-black" : "bg-[#40FFD1]/5 text-white"}`}
            >
              SCADS
            </button>
            <button
              onClick={() => setPanel("TWINE")}
              className={`rounded-3xl px-6 py-1 text-sm font-semibold transition-colors duration-300 ${panel === "TWINE" ? "bg-lime text-black" : "bg-[#40FFD1]/5 text-white"}`}
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
          className="absolute right-0 top-0 -z-10 rounded-tr-3xl"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SwapModal;
