"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { LampContainer } from "@/components/ui/lamp-effect";
import AnimatedBackground from "@/components/ui/animated-background";

const TextBlock = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);

  return (
    <section className="relative mt-72 flex flex-col items-center gap-y-4 px-4 text-white md:px-0">
      <LampContainer
        colorLine="custom-color"
        colorLeft="from-custom-color"
        colorRight="to-custom-color"
        className="absolute -top-16 -z-10 2xl:-top-20"
      />
      <SectionHeader title="Introducing Scads" />
      <div className="max-w-[340px] text-neutral-300 lg:max-w-[1024px]">
        <p className="z-10">
          DeFi (Decentralized Finance) has experienced phenomenal growth over
          the past 4 years. The DeFi sector, which did not exist 6 years ago,
          has already accumulated a staggering market capitalization of 112
          billion US dollars. However, this rapid growth{" "}
          <span
            className={cn(
              textIsVisible
                ? "text-white"
                : "bg-gradient-to-r bg-clip-text text-transparent from-white via-white to-dark-blue",
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
              <p className="">
                SCADS is an innovative stablecoin based on the Proof of Holding
                algorithm that will transform the digital currency landscape.
              </p>
              <ul className=" list-disc pl-4">
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
        className="group z-10 mt-4 flex items-end gap-x-2 font-semibold text-white"
      >
        {textIsVisible ? "Show less" : "Show more"}
        {textIsVisible ? (
          <ChevronUp className="transition-transform group-hover:-translate-y-1" />
        ) : (
          <ChevronDown className="transition-transform group-hover:translate-y-1" />
        )}
      </button>
      <AnimatedBackground color="bg-custom-color" />
    </section>
  );
};

export default TextBlock;
