"use client";

import { motion } from "framer-motion";

interface RoadmapItemProps {
  date: string;
  l1: string;
  l2?: string;
  l3?: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ date, l1, l2, l3 }) => {
  return (
    <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
      <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-custom-color shadow md:order-1 md:group-odd:-translate-x-8 md:group-even:translate-x-8" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[calc(100%-4rem)] rounded-xl bg-white/40 p-4 shadow dark:bg-transparent dark:bg-gradient-to-br dark:from-transparent dark:to-white/10 md:w-[calc(50%-2.5rem)]"
      >
        <div className="mb-1 flex items-center justify-between space-x-2">
          <time className="bg-transparent bg-gradient-to-b from-black to-neutral-500 bg-clip-text font-semibold text-transparent dark:from-white dark:to-neutral-400">
            {date}
          </time>
        </div>
        <ul className="text-black dark:text-white dark:opacity-70">
          <li>{l1}</li>
          {l2 && <li>{l2}</li>}
          {l3 && <li>{l3}</li>}
        </ul>
      </motion.div>
    </div>
  );
};

export default RoadmapItem;
