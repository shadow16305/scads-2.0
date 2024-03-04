"use client";

import { statItems } from "@/constants/constants";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";

const GeneralStats = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className="z-20 flex flex-col items-center gap-y-4 px-8 pt-8 lg:flex-row lg:items-start lg:justify-between">
      {statItems.map((item) => (
        <div
          key={item.id}
          className="flex min-w-full items-center justify-between gap-x-3 px-10 lg:min-w-0 lg:justify-normal lg:px-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={clsx(
              "rounded-full p-2",
              themeCtx.isLight ? "bg-lime" : "bg-lime/20 text-lime",
            )}
          >
            <div className="relative [&>*]:h-10 [&>*]:w-10 [&>*]:lg:h-7 [&>*]:lg:w-7">
              {item.icon}
            </div>
          </motion.div>
          <div className="flex flex-col gap-y-1">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={clsx(
                "lg:text-sm",
                themeCtx.isLight ? "font-semibold" : "text-lime",
              )}
            >
              {item.name}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={clsx(
                "text-end lg:text-start",
                themeCtx.isLight ? "text-black" : "text-white",
              )}
            >
              {item.placeholder}
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralStats;
