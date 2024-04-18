"use client";

import { motion } from "framer-motion";

const RoadmapHeader = () => {
  return (
    <motion.h2
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-black to-neutral-700 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent dark:from-white dark:to-neutral-500 2xl:text-7xl"
    >
      Roadmap
    </motion.h2>
  );
};

export default RoadmapHeader;
