"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const TextBlock = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);

  return (
    <section className="relative mt-32 flex flex-col items-center gap-y-4 px-4 text-white md:px-0">
      <SectionHeader title="Introducing Scads" y={-50} />
      <div className="max-w-[340px] text-neutral-300 lg:max-w-[1024px]">
        <p className="z-10">
          The growth and progression of Decentralized Finance: what started off
          as a new niche market just four years ago grew significantly into a
          player to be reckoned in the financial industry. While in Q1 of 2024
          it was valued at around $112 billion USD, the estimate can only
          continue thanks to the increasing adoption and interest from
          investors. Still, all this growth was not without issues because of
          the following major challenges:
        </p>
        <AnimatePresence mode="wait">
          {textIsVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-10 mt-4"
            >
              <ul className="list-disc pl-4">
                <li>
                  Products integrity – an important number of DeFi projects
                  either proved to work unsustainably, offering returns that
                  could never be secured, or simply failed to deliver on their
                  promises.
                </li>
                <li>
                  Platform security – technical issues represented another
                  challenge due to the significant number of breaches happening
                  that at times turned into financial loses.
                </li>
                <li>
                  Regulatory concerns – although independence from conventional
                  financial regulation brings numerous opportunities, it is also
                  extremely hard to navigate and remain compliant.
                </li>
              </ul>
              <p className="mt-4">
                SCADS: Disruptive Technology In Stablecoin Ecosystem SCADS
                redefines the traditional stablecoin landscape thanks to the
                innovative Proof of Holding algorithm. This stablecoin is not
                correlated with dollars or euros – the group is the Swiss Franc,
                a currency used only as a reference, with minimal inflation and
                no connection to U.S. economic cycles. SCADS is primarily about:
              </p>
              <ul className="mt-4 list-disc pl-4">
                <li>
                  Security – funds are stored on a user’s wallet and are not
                  managed or affected by other financial institutions.
                </li>
                <li>
                  Passive income – SCADS avoids the common risks of staking and
                  liquidity pool participation and allows users to earn
                  passively.
                </li>
                <li>
                  Fair and transparent operations – there is no one to
                  manipulate the algorithm, and its operations are guaranteed to
                  be fair. Players can influence it collectively to improve and
                  evolve it. How we plan to move forward: as SCADS continues to
                  develop and integrate new user feedback for its improvements,
                  we assure our users in our reliability and creativity in the
                  DeFi space.
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
