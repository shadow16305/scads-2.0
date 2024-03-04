"use client";

import { useContext } from "react";
import SectionHeader from "../ui/SectionHeader";
import TokenomicsCarousel from "./TokenomicsCarousel";
import TokenomicsContent from "./TokenomicsContent";
import { AnimatePresence, motion } from "framer-motion";
import { TokenomicsContext } from "@/contexts/tokenomics-context";
import { tokenomicsButtons, tokenomicsContent } from "@/constants/constants";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";

const Tokenomics = () => {
  const tokenomicsCtx = useContext(TokenomicsContext);
  const activeText = tokenomicsCtx.activeItem;
  const setActiveText = tokenomicsCtx.setActiveItem;
  const themeCtx = useContext(ThemeContext);

  const activeContent = tokenomicsContent.find(
    (content) => content.id === activeText,
  );

  return (
    <section
      className={clsx(
        "mt-32 scroll-mt-32 rounded-2xl border px-4 lg:px-0",
        themeCtx.isLight
          ? "bg-transparent shadow-md"
          : "border-[#40FFD1]/10 bg-[#0B1018]",
      )}
      id="tokenomics"
    >
      <div
        className={clsx(
          "flex w-full justify-center rounded-t-2xl border py-4",
          themeCtx.isLight
            ? "bg-[#0B1018]/5"
            : "border-[#40FFD1]/10 bg-[#133930]/10",
        )}
      >
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
