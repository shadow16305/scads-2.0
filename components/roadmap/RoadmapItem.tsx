"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface RoadmapItemProps {
  isLight: boolean;
  date: string;
  l1: string;
  l2?: string;
  l3?: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  isLight,
  date,
  l1,
  l2,
  l3,
}) => {
  return (
    <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lime shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={clsx(
          "w-[calc(100%-4rem)] rounded-xl p-4 shadow md:w-[calc(50%-2.5rem)]",
          isLight ? "bg-[#0B1018]/5" : "bg-[#0B1018]",
        )}
      >
        <div className="mb-1 flex items-center justify-between space-x-2">
          <time
            className={clsx(
              "font-semibold",
              isLight ? "text-black" : "text-lime",
            )}
          >
            {date}
          </time>
        </div>
        <ul className={clsx(isLight ? "text-black" : "text-white opacity-70")}>
          <li>{l1}</li>
          {l2 && <li>{l2}</li>}
          {l3 && <li>{l3}</li>}
        </ul>
      </motion.div>
    </div>
  );
};

export default RoadmapItem;
