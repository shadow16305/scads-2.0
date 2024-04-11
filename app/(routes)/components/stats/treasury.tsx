"use client";

import { treasuryItems } from "@/constants/content";
import SectionHeader from "@/components/ui/section-header";
import { AiOutlineDash } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

const Treasury = () => {
  return (
    <section className="lg:rounded-t-0 relative flex flex-col items-center gap-y-8 rounded-b-3xl border-t border-neutral-300 px-8 pb-8 dark:border-white/10">
      <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 rounded-3xl border border-neutral-300 bg-gradient-to-b from-transparent via-[#F4F3F2] to-[#F4F3F2] px-2 dark:border-white/10 dark:bg-transparent dark:from-transparent dark:via-[#000212] dark:to-[#000212]">
        <SectionHeader title="Treasury balance" />
      </div>
      <div className="relative mt-16 flex flex-col items-center gap-y-10 rounded-b-3xl lg:w-full lg:flex-row lg:justify-between">
        {treasuryItems.map((item) => (
          <div className="flex items-center gap-x-20" key={item.id}>
            <div className="z-10 flex flex-col items-center gap-y-2">
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="dark: text-sm font-semibold text-black dark:bg-gradient-to-b dark:from-white dark:to-neutral-500 dark:bg-clip-text dark:text-transparent"
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
                  className="text-black dark:text-white dark:opacity-70"
                >
                  {item.amount}
                </motion.p>
              </div>
            </div>
            {item.id !== "ti5" && (
              <AiOutlineDash
                className="hidden text-custom-color dark:text-neutral-300 lg:block"
                size={32}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treasury;
