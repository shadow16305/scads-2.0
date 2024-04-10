"use client";

import { TokenomicsContext } from "@/contexts/tokenomics-context";
import { motion } from "framer-motion";
import { useContext } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cardItems } from "@/constants/content";

const Wallets = () => {
  const tokenomicsCtx = useContext(TokenomicsContext);
  const setActiveText = tokenomicsCtx.setActiveItem;

  return (
    <section className="relative mt-32 flex flex-col items-center gap-y-4 py-12 dark:bg-transparent">
      <motion.h2
        initial={{ opacity: 0.5, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mt-8 bg-gradient-to-br from-black to-neutral-700 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent dark:from-white dark:to-neutral-500"
      >
        Wallets
      </motion.h2>
      <div className="flex max-w-[1036px] flex-col flex-wrap gap-8 lg:flex-row">
        <HoverEffect
          items={cardItems}
          onClick={(title: string) => setActiveText(title)}
        />
      </div>
    </section>
  );
};

export default Wallets;
