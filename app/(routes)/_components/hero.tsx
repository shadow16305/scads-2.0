"use client";

import SwapModal from "@/components/swap/swap-modal";
import { IoEllipse } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative z-10 mx-auto flex justify-center pt-40 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <div className="flex flex-col items-center gap-y-8 text-white lg:max-w-none">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[310px] bg-gradient-to-br from-neutral-600 to-black bg-clip-text text-center text-2xl font-bold leading-tight text-transparent dark:from-white dark:to-neutral-500 md:max-w-[800px] lg:text-[44px]"
          >
            The World's First Non-PEGGED self-sustained Stablecoin Powered by
            Proof of Holding
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[340px] text-center text-lg text-black dark:text-neutral-300 lg:max-w-[550px] xl:max-w-[700px]"
          >
            The change is here, freewill will be the chain, proof of hold the
            protocol, SCADS and TWINE, the first proof of technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SwapModal navigation={false} />
          </motion.div>
        </div>
      </div>
      <IoEllipse
        className="absolute -top-full left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-2/3 bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] text-transparent blur-[800px] dark:lg:block"
        size={1000}
      />
      <IoEllipse
        className="absolute -top-2/3 left-1/2 -z-10 hidden -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-700 via-[#B5FFFC] to-custom-color text-transparent blur-[200px] dark:hidden lg:block"
        size={800}
      />
      <IoEllipse
        className="absolute left-1/2 top-0 -z-10 hidden -translate-x-1/2 -translate-y-1/2 text-custom-color/80 blur-[300px] dark:block md:hidden"
        size={340}
      />
      <IoEllipse
        className="absolute -bottom-1/4 left-2/3 -z-10 hidden -translate-x-1/2 rounded-full bg-gradient-to-r from-custom-color via-[#B5FFFC] to-purple-700 text-transparent blur-[200px] dark:hidden lg:block"
        size={800}
      />
    </section>
  );
};

export default Hero;
