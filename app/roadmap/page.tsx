"use client";

import clsx from "clsx";
import { ThemeContext } from "@/contexts/theme-context";
import { useContext } from "react";
import { roadmapContent } from "@/constants/constants";
import { motion } from "framer-motion";

const Roadmap = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <article className="mx-auto mt-40 space-y-12 px-4 lg:px-0 xl:max-w-[1240px]">
      <h1
        className={clsx(
          "text-center text-4xl",
          themeCtx.isLight ? "text-black" : "text-lime",
        )}
      >
        Roadmap
      </h1>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {roadmapContent.map((item) => (
          <div
            key={item.id}
            className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lime shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={clsx(
                "w-[calc(100%-4rem)] rounded-xl p-4 shadow md:w-[calc(50%-2.5rem)]",
                themeCtx.isLight ? "bg-[#0B1018]/5" : "bg-[#0B1018]",
              )}
            >
              <div className="mb-1 flex items-center justify-between space-x-2">
                <time
                  className={clsx(
                    "font-semibold",
                    themeCtx.isLight ? "text-black" : "text-lime",
                  )}
                >
                  {item.date}
                </time>
              </div>
              <ul
                className={clsx(
                  themeCtx.isLight ? "text-black" : "text-white opacity-70",
                )}
              >
                <li>{item.l1}</li>
                {item.l2 && <li>{item.l2}</li>}
                {item.l3 && <li>{item.l3}</li>}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Roadmap;
