"use client";

import { useContext } from "react";
import SectionHeader from "@/components/ui/section-header";
import TokenomicsCarousel from "./tokenomics-carousel";
import TokenomicsContent from "./tokenomics-content";
import { AnimatePresence, motion } from "framer-motion";
import { TokenomicsContext } from "@/contexts/tokenomics-context";
import { tokenomicsButtons, tokenomicsContent } from "@/constants/content";

const Tokenomics = () => {
  const tokenomicsCtx = useContext(TokenomicsContext);
  const activeText = tokenomicsCtx.activeItem;
  const setActiveText = tokenomicsCtx.setActiveItem;

  const activeContent = tokenomicsContent.find(
    (content) => content.id === activeText,
  );

  return (
    <section
      className="mx-auto mt-32 max-w-fit scroll-mt-32 rounded-2xl border bg-transparent shadow-md dark:border-[#40FFD1]/10 dark:bg-[#0B1018] lg:max-w-none"
      id="tokenomics"
    >
      <div className="flex w-full justify-center rounded-t-2xl border bg-[#0B1018]/5 py-4 dark:border-[#40FFD1]/10 dark:bg-[#133930]/10">
        <SectionHeader title="Tokenomics" />
      </div>
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
