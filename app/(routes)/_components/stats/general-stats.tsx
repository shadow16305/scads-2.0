"use client";

import { statItems } from "@/constants/content";
import { motion } from "framer-motion";

const GeneralStats = () => {
  return (
    <div className="flex items-end justify-center">
      <div className="z-20 flex min-w-full flex-col items-center gap-y-4 px-4 pt-8 md:min-w-0 md:px-8 lg:w-full lg:flex-row lg:items-start lg:justify-between">
        {statItems.map((item) => (
          <div
            key={item.id}
            className="flex min-w-full items-center justify-between gap-x-10 md:justify-normal md:gap-x-3 lg:min-w-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-full bg-white/10 p-3 lg:p-2 xl:p-3"
            >
              <div className="relative text-neutral-300 [&>*]:size-7 lg:[&>*]:size-5 xl:[&>*]:size-6">
                {item.icon}
              </div>
            </motion.div>
            <div className="flex flex-col items-end gap-y-1 md:items-start">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-sm font-normal text-black text-transparent lg:text-xs xl:text-sm"
              >
                {item.name}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white lg:text-sm xl:text-base"
              >
                {item.placeholder}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralStats;
