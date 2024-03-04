"use client";

import { treasuryItems } from "@/constants/constants";
import SectionHeader from "../ui/SectionHeader";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import { AiOutlineDash } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

const Treasury = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <section
      className={clsx(
        "relative flex flex-col items-center gap-y-8 rounded-b-3xl px-8 pb-8",
        themeCtx.isLight ? "bg-[#0B1018]/5" : "bg-[#2E454F]/10",
      )}
    >
      <div
        className={clsx(
          "absolute -top-12 left-1/2 -translate-x-1/2 rounded-t-3xl px-2 pt-2",
          themeCtx.isLight ? "bg-[#0B1018]/5" : "bg-[#2E454F]/10",
        )}
      >
        <SectionHeader title="Treasury balance" />
      </div>
      <div className="relative mt-6 flex flex-col gap-y-20 rounded-3xl lg:w-full lg:flex-row lg:justify-between">
        {treasuryItems.map((item) => (
          <div className="flex items-center gap-x-20" key={item.id}>
            <div className="z-10 flex flex-col items-center gap-y-2">
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={clsx(
                  "text-sm",
                  themeCtx.isLight ? "font-semibold text-black" : "text-lime",
                )}
              >
                {item.name}
              </motion.p>
              <div className="flex items-center gap-x-0.5">
                {item.id === "ti2" && (
                  <Image
                    src="/images/currency/SCADS.svg"
                    alt="Scads"
                    width={7}
                    height={16}
                    className={clsx(themeCtx.isLight ? "invert" : "opacity-70")}
                  />
                )}
                {item.id === "ti3" && (
                  <Image
                    src="/images/currency/TWINE.svg"
                    alt="Scads"
                    width={7}
                    height={16}
                    className={clsx(themeCtx.isLight ? "invert" : "opacity-70")}
                  />
                )}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={clsx(
                    themeCtx.isLight ? "text-black" : "text-white opacity-70",
                  )}
                >
                  {item.amount}
                </motion.p>
              </div>
            </div>
            {item.id !== "ti5" && (
              <AiOutlineDash className="hidden text-lime lg:block" size={32} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treasury;
