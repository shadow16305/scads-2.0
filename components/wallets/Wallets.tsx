"use client";

import { TokenomicsContext } from "@/contexts/tokenomics-context";
import SectionHeader from "../ui/SectionHeader";
import Card from "./Card";
import { useContext } from "react";

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
    <section className="mt-32 flex flex-col items-center gap-y-8 bg-[#091224] py-9">
      <SectionHeader title="Wallets" />
      <div className="flex max-w-[1036px] flex-col flex-wrap gap-8 lg:flex-row">
        {cardItems.map((item, index) => (
          <Card
            key={item.id}
            number={index + 1}
            title={item.name}
            description={item.paragraph}
            onClick={() => setActiveText(item.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default Wallets;
