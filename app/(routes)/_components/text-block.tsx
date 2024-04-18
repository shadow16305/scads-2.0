"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

const TextBlock = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);

  return (
    <section className="relative mt-32 flex flex-col items-center gap-y-4 px-4 text-black dark:text-white md:px-0">
      <motion.h2
        initial={{ opacity: 0.5, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-black to-neutral-700 bg-clip-text py-4 text-center text-3xl font-medium tracking-tight text-transparent dark:from-white dark:to-neutral-500 md:text-4xl"
      >
        DeFi: Explosive Growth, but with Caveats
      </motion.h2>
      <div className="dark:text-neutral-300">
        <p className="z-10 max-w-[340px] lg:max-w-[647px]">
          DeFi (Decentralized Finance) has experienced phenomenal growth over
          the past 4 years. The DeFi sector, which did not exist 6 years ago,
          has already accumulated a staggering market capitalization of 112
          billion US dollars. However, this rapid growth{" "}
          <span
            className={cn(
              textIsVisible
                ? "dark:text-white"
                : "bg-gradient-to-r from-black via-black to-transparent bg-clip-text text-transparent dark:from-white dark:via-white dark:to-dark-blue",
            )}
          >
            has been overshadowed by significant financial losses for investors.
          </span>
        </p>
        <AnimatePresence mode="wait">
          {textIsVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-10 flex origin-top flex-col gap-y-4 pt-4"
            >
              <p>The main reasons for the losses:</p>
              <ul className="max-w-[340px] list-disc pl-4 lg:max-w-[647px]">
                <li>
                  Fraudulent projects: scammers lure people in with promises of
                  unrealistically high APR/APY (annual percentage rates) and
                  other questionable investment strategies.
                </li>
                <li>
                  Unreliable platforms: many DeFi platforms have vulnerabilities
                  in their code that can be exploited by hackers to steal funds.
                </li>
                <li>
                  Manipulative regulation: the decentralized nature of DeFi
                  protects it from government agencies control or weaponization.
                </li>
              </ul>
              <p className="max-w-[340px] lg:max-w-[647px]">
                SCADS is an innovative stablecoin based on the Proof of Holding
                algorithm that will transform the digital currency landscape.
              </p>
              <ul className="max-w-[340px] list-disc pl-4 lg:max-w-[647px]">
                <li>
                  Non-pegged: Unlike traditional stablecoins, SCADS is not
                  pegged to fiat currencies (dollar, euro, etc.). This makes it
                  more resistant to inflation and economic shocks.(use the SWISS
                  FRANC only as a point of reference)
                </li>
                <li>
                  Reliable: User funds are stored in their own wallets, which
                  ensures maximum security.
                </li>
                <li>
                  Risk-free: SCADS offers passive income without staking or
                  participating in liquidity pools. This guarantees no risks or
                  losses.
                </li>
                <li>
                  Autonomous: SCADS operates without owners, managed solely by
                  an algorithm. This eliminates the possibility of manipulation
                  and fraud.
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={() => setTextIsVisible(!textIsVisible)}
        className="group z-10 mt-4 flex items-end gap-x-2 font-semibold text-black dark:text-white"
      >
        {textIsVisible ? "Show less" : "Show more"}
        {textIsVisible ? (
          <ChevronUp className="transition-transform group-hover:-translate-y-1" />
        ) : (
          <ChevronDown className="transition-transform group-hover:translate-y-1" />
        )}
      </button>
    </section>
  );
};

export default TextBlock;
