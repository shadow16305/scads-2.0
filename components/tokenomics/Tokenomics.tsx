"use client";

import { useContext } from "react";
import SectionHeader from "../ui/SectionHeader";
import TokenomicsCarousel from "./TokenomicsCarousel";
import TokenomicsContent from "./TokenomicsContent";
import { AnimatePresence, motion } from "framer-motion";
import { TokenomicsContext } from "@/contexts/tokenomics-context";
import { tokenomicsButtons, tokenomicsContent } from "@/utils/utils";

const Tokenomics = () => {
  const tokenomicsCtx = useContext(TokenomicsContext);
  const activeText = tokenomicsCtx.activeItem;
  const setActiveText = tokenomicsCtx.setActiveItem;

  const activeContent = tokenomicsContent.find(
    (content) => content.id === activeText,
  );

  return (
    <section
      className="mt-32 scroll-mt-32 rounded-2xl border border-[#40FFD1]/10 bg-[#0B1018]"
      id="tokenomics"
    >
      <div className="flex w-full justify-center rounded-t-2xl border border-[#40FFD1]/10 bg-[#133930]/10 py-4">
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
