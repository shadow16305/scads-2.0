"use client";

import { TokenomicsContext } from "@/contexts/tokenomics-context";
import SectionHeader from "../ui/SectionHeader";
import Card from "./Card";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { ThemeContext } from "@/contexts/theme-context";

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
  const themeCtx = useContext(ThemeContext);

  return (
    <section
      className={clsx(
        "mt-32 flex flex-col items-center gap-y-8 py-9",
        themeCtx.isLight ? "bg-[#0B1018]/10" : "bg-[#2E454F]/10",
      )}
    >
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
                className={clsx(
                  themeCtx.isLight
                    ? index === 1 || index === 3 || index === 5
                      ? "bg-lime"
                      : "bg-[#F4F3F2]"
                    : "bg-transparent",
                )}
                numberClass={clsx(
                  themeCtx.isLight
                    ? index === 1 || index === 3 || index === 5
                      ? "bg-[#0B1018] text-lime"
                      : "bg-lime"
                    : "bg-lime/20 text-lime",
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
