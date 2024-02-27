"use client";

import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";

const TextBlock = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);
  const themeCtx = useContext(ThemeContext);

  const textClass = clsx(themeCtx.isLight ? "text-black" : "text-white");

  return (
    <section
      className={`relative mt-32 flex flex-col items-center gap-y-4 text-center ${textClass}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="z-10 max-w-[372px] text-center text-2xl font-medium lg:max-w-[647px] lg:text-4xl"
      >
        Empowering DeFi with{" "}
        <span className={clsx(!themeCtx.isLight && "text-lime")}>SCADS</span> A
        New Era in Stability and Security
      </motion.h2>
      <p className="z-10 max-w-[364px] opacity-70 lg:max-w-[647px]">
        In the past four years, the DeFi sector has witnessed explosive growth,
        accumulating a staggering market cap of 48 billion USD. However, this
        surge has been tainted by significant financial losses for investors,
        largely due to the proliferation of fraudulent projects promising
        unrealistic APR/APY and other investment strategies.
      </p>
      <AnimatePresence mode="wait">
        {textIsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 flex origin-top flex-col items-center gap-y-4"
          >
            <p className="max-w-[364px] opacity-70 lg:max-w-[647px]">
              To counter these vulnerabilities, there's an urgent call for an
              algorithmic solution. Such a solution would play a pivotal role in
              discerning patterns and establishing robust safeguards within the
              DeFi sphere. The demand for a strategic product capable of
              mitigating risks and preventing fraudulent activities in DeFi is
              palpable.
            </p>
            <p className="max-w-[364px] opacity-70 lg:max-w-[647px]">
              Enter SCADS – a groundbreaking PROOF OF HOLD (POH) stablecoin that
              is poised to redefine the digital currency landscape. Unlike
              traditional stablecoins, SCADS steers clear of direct pegging to
              the USD, instead utilizing it as a reference point for user
              convenience. It embodies decentralization, self-sustainability,
              and freedom from obligations. Users' funds find secure refuge in
              their own wallets, while the algorithm operates perpetually
              debt-free.
            </p>
            <p className="max-w-[364px] opacity-70 lg:max-w-[647px]">
              The ingenious PROOF OF HOLDING mechanism empowers users to
              effortlessly generate passive income by simply holding SCADS in
              their personal wallet. No staking or involvement in liquidity
              pools is required. This results in a genuinely risk-free solution
              with guaranteed growth. Furthermore, SCADS operates autonomously,
              free from owners, relying entirely on a meticulously crafted
              automated algorithm.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setTextIsVisible(!textIsVisible)}
        className={clsx("z-10 font-bold", !themeCtx.isLight && "text-lime")}
      >
        {textIsVisible ? "Show less" : "Show more"}
      </button>
    </section>
  );
};

export default TextBlock;
