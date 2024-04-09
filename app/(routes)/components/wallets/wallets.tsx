"use client";

import { TokenomicsContext } from "@/contexts/tokenomics-context";
import SectionHeader from "../../../../components/ui/section-header";
import Card from "./card";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { cn } from "@/lib/utils";

const cardItems = [
  {
    id: "ci1",
    name: "SCADS",
    paragraph:
      "Decentralized, stable digital currency for secure global transactions, not pegged based on (POH).",
  },
  {
    id: "ci2",
    name: "TWINE",
    paragraph:
      "Linearly growing digital asset for minted by holding SCADS long-term, secured and trusted investment.",
  },
  {
    id: "ci3",
    name: "SEIGNORAGE",
    paragraph: "The system self cost of minting.",
  },
  {
    id: "ci4",
    name: "PULSE",
    paragraph:
      "Self-sustained investment protocol & network effect within SCADS ecosystem.",
  },
  {
    id: "ci5",
    name: "TREASURY",
    paragraph: "Financial backbone of SCADS, managing assets and liquidity.",
  },
  {
    id: "ci6",
    name: "LIQUIDITY WALLET",
    paragraph:
      "Is a depository to supply liquidity to the market as makers and liquidity providers.",
  },
];

const Wallets = () => {
  const tokenomicsCtx = useContext(TokenomicsContext);
  const setActiveText = tokenomicsCtx.setActiveItem;

  return (
    <section className="mt-32 flex flex-col items-center gap-y-8 bg-[#0B1018]/5 py-12 dark:bg-[#2E454F]/10">
      <SectionHeader title="Wallets" />
      <AnimatePresence mode="wait">
        <div className="flex max-w-[1036px] flex-col flex-wrap gap-8 lg:flex-row">
          {cardItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={item.id}
            >
              <Card
                number={index + 1}
                title={item.name}
                description={item.paragraph}
                onClick={() => setActiveText(item.name)}
                className={cn(
                  index === 1 || index === 3 || index === 5
                    ? "bg-lime"
                    : "bg-[#F4F3F2]",
                  "dark:bg-transparent",
                )}
                numberClass={cn(
                  index === 1 || index === 3 || index === 5
                    ? "bg-[#0B1018] text-lime"
                    : "bg-lime text-black",
                  "dark:bg-lime/20 dark:text-lime",
                )}
                shortcutClass={cn(
                  index === 0 || index === 2 || index === 4
                    ? "bg-lime"
                    : "bg-[#F4F3F2]",
                  "dark:bg-lime",
                )}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Wallets;
