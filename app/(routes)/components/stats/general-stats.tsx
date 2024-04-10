"use client";

import { statItems } from "@/constants/content";
import { motion } from "framer-motion";

const GeneralStats = () => {
  return (
    <div className="flex items-end justify-center">
      <div className="bg-custom-color/10 h-96 w-0.5 lg:hidden" />
      <div className="z-20 flex flex-col items-center gap-y-4 px-8 pt-8 lg:w-full lg:flex-row lg:items-start lg:justify-between">
        {statItems.map((item) => (
          <div
            key={item.id}
            className="flex min-w-full items-center gap-x-3 lg:min-w-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-custom-color dark:bg-custom-color/20 dark:text-custom-color rounded-full p-2"
            >
              <div className="relative [&>*]:size-7">{item.icon}</div>
            </motion.div>
            <div className="flex flex-col gap-y-1">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="dark:text-custom-color text-sm font-semibold dark:font-normal"
              >
                {item.name}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-black dark:text-white"
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
