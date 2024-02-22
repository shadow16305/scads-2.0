"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const statItems = [
  {
    id: "s1",
    name: "Adaptive minting speed",
    placeholder: "0.0000006",
    imgSrc: "/images/vuesax/linear/money-time.svg",
  },
  {
    id: "s2",
    name: "Funds in Pulse",
    placeholder: "8079.49",
    imgSrc: "/images/vuesax/linear/ocean-protocol-(ocean).svg",
  },
  {
    id: "s3",
    name: "Next Pulse",
    placeholder: "05:26:15",
    imgSrc: "/images/vuesax/linear/clock.svg",
  },
  {
    id: "s4",
    name: "Minted supply of TWINE",
    placeholder: "1650851.99",
    imgSrc: "/images/vuesax/linear/trade.svg",
  },
  {
    id: "s5",
    name: "TWINE price increase",
    placeholder: "0.17",
    imgSrc: "/images/vuesax/linear/trend-up.svg",
  },
  {
    id: "s6",
    name: "SCADS Held",
    placeholder: "26513.82",
    imgSrc: "/images/vuesax/linear/math.svg",
  },
];

const Stats = () => {
  return (
    <div className="mx-auto mt-32 flex w-full justify-between border-b border-b-[#1D3360]/60 pb-8">
      {statItems.map((item) => (
        <div key={item.id} className="flex items-center gap-x-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-full bg-lime/20 p-2"
          >
            <Image src={item.imgSrc} alt={item.name} width={28} height={28} />
          </motion.div>
          <div className="flex flex-col gap-y-1">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm text-lime"
            >
              {item.name}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              className="text-sm text-white"
            >
              {item.placeholder}
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
