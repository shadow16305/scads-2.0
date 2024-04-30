"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const TextBlock = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);

  return (
    <section className="relative mt-52 flex flex-col items-center gap-y-4 px-4 text-white md:px-0">
      <SectionHeader title="Introducing Scads" y={-50} />
      <div className="max-w-[340px] text-neutral-300 lg:max-w-[1024px]">
        <p className="z-10">
          DeFi (Decentralized Finance) has experienced phenomenal growth over
          the past 4 years. The DeFi sector, which did not exist 6 years ago,
          has already accumulated a staggering market capitalization of 112
          billion US dollars. However, this rapid growth has been overshadowed
          by significant financial losses for investors.
        </p>
        <AnimatePresence mode="wait">
          {textIsVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-10 mt-4"
            >
              <p>The main reasons for the losses:</p>
              <ul className="list-disc pl-4">
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
              <p className="mt-4">
                SCADS is an innovative stablecoin based on the Proof of Holding
                algorithm that will transform the digital currency landscape.
              </p>
              <ul className="list-disc pl-4">
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
        className="group z-10 mt-4 flex items-center gap-x-2 font-medium text-white"
      >
        {textIsVisible ? "Show less" : "Show more"}
        {textIsVisible ? (
          <ChevronRight className="size-4 transition-transform group-hover:-rotate-90" />
        ) : (
          <ChevronRight className="size-4 transition-transform group-hover:rotate-90" />
        )}
      </button>
    </section>
  );
};

export default TextBlock;
