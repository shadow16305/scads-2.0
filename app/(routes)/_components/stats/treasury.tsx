"use client";

import { treasuryItems } from "@/constants/content";
import Image from "next/image";
import { motion } from "framer-motion";

const Treasury = () => {
  return (
    <section className="lg:rounded-t-0 relative flex flex-col items-center gap-y-8 rounded-b-3xl px-4 pb-10 md:px-8">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-3xl border border-white/60 bg-white/20 px-2 backdrop-blur-3xl dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-dark-blue dark:to-transparent">
        <h4 className="px-2 py-2 text-sm text-black dark:text-neutral-300 md:px-4">
          Treasury
        </h4>
      </div>
      <div className="mt-8 flex w-full flex-col items-center gap-y-10 rounded-b-3xl lg:flex-row lg:justify-between">
        {treasuryItems.map((item) => (
          <div
            className="relative flex min-w-full items-center gap-x-10 md:min-w-0 xl:gap-x-20"
            key={item.id}
          >
            <div className="z-10 flex min-w-full items-center justify-between gap-y-2 md:min-w-0 md:flex-col">
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-black dark:bg-gradient-to-b dark:from-white dark:to-neutral-500 dark:bg-clip-text dark:text-transparent lg:text-xs xl:text-sm"
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
                    className="invert dark:opacity-70 dark:invert-0"
                  />
                )}
                {item.id === "ti3" && (
                  <Image
                    src="/images/currency/TWINE.svg"
                    alt="Scads"
                    width={7}
                    height={16}
                    className="invert dark:opacity-70 dark:invert-0"
                  />
                )}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-black dark:text-white dark:opacity-70 lg:text-sm xl:text-base"
                >
                  {item.amount}
                </motion.p>
              </div>
            </div>
            {item.id !== "ti5" && (
              <>
                <div className="absolute -right-full hidden h-24 w-[1px] bg-white/10 lg:block" />
                <div className="absolute -right-full hidden h-4 w-[1px] bg-white/30 lg:block" />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treasury;
