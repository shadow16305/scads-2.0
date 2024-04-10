"use client";

import { treasuryItems } from "@/constants/content";
import SectionHeader from "@/components/ui/section-header";
import { AiOutlineDash } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

const Treasury = () => {
  return (
    <section className="lg:rounded-t-0 dark:bg-custom-color/5 relative flex flex-col items-center gap-y-8 rounded-b-3xl bg-[#0B1018]/5 px-8 pb-8">
      <div className="dark:bg-custom-color/5 absolute -top-12 left-1/2 -translate-x-1/2 rounded-t-3xl bg-[#0B1018]/5 px-2 pt-2">
        <SectionHeader title="Treasury balance" />
      </div>
      <div className="relative mt-6 flex flex-col items-center gap-y-10 rounded-b-3xl lg:w-full lg:flex-row lg:justify-between">
        {treasuryItems.map((item) => (
          <div className="flex items-center gap-x-20" key={item.id}>
            <div className="z-10 flex flex-col items-center gap-y-2">
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="dark:text-custom-color text-sm font-semibold text-black"
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
                className="text-custom-color hidden lg:block"
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
