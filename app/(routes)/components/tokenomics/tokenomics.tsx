"use client";

import { useContext } from "react";
import TokenomicsCarousel from "./tokenomics-carousel";
import TokenomicsContent from "./tokenomics-content";
import { AnimatePresence, motion } from "framer-motion";
import { TokenomicsContext } from "@/contexts/tokenomics-context";
import { tokenomicsButtons, tokenomicsContent } from "@/constants/content";
import { Separator } from "@/components/ui/separator";

const Tokenomics = () => {
  const tokenomicsCtx = useContext(TokenomicsContext);
  const activeText = tokenomicsCtx.activeItem;
  const setActiveText = tokenomicsCtx.setActiveItem;

  const activeContent = tokenomicsContent.find(
    (content) => content.id === activeText,
  );

  return (
    <section
      className="mx-auto mt-56 max-w-fit scroll-mt-32 rounded-2xl bg-transparent lg:max-w-none"
      id="tokenomics"
    >
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
        Tokenomics
      </motion.h2>
      <Separator className="dark:bg-custom-color/20" />
      <TokenomicsCarousel
        onClick={(item) => setActiveText(item)}
        items={tokenomicsButtons}
        activeText={activeText}
      />
      <AnimatePresence mode="wait">
        {activeContent && (
          <motion.div
            key={activeContent.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TokenomicsContent
              paragraph={activeContent.paragraph}
              list={activeContent.list}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Tokenomics;
