import SwapModal from "@/components/swap/swap-modal";
import Stats from "./stats/stats";
import { IoEllipse } from "react-icons/io5";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 z-0 w-screen bg-custom-color dark:bg-transparent lg:h-3/4" />
      <div className="relative z-10">
        <div className="mx-auto flex justify-center pt-40 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
          <div className="flex flex-col items-center gap-y-8 text-white lg:max-w-none">
            <h1 className="max-w-[310px] bg-clip-text text-center text-2xl font-bold leading-tight text-white dark:bg-gradient-to-br dark:from-white dark:to-neutral-500 dark:text-transparent md:max-w-[800px] lg:text-[44px]">
              The World's First Non-PEGGED self-sustained Stablecoin Powered by
              Proof of Holding
            </h1>
            <div className="dark:text-neutral-300">
              <p className="max-w-[340px] text-center lg:max-w-[550px] xl:max-w-[700px]">
                The change is here, freewill will be the chain, proof of hold
                the protocol, SCADS and TWINE, the first proof of technology.
              </p>
            </div>
            <SwapModal navigation={false} />
          </div>
        </div>
        <Stats />
      </div>
      <IoEllipse
        className="absolute -top-1/2 left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 text-custom-color/80 blur-[800px] dark:lg:block"
        size={1000}
      />
      <IoEllipse
        className="absolute left-1/2 top-0 -z-10 hidden -translate-x-1/2 -translate-y-1/2 text-custom-color/80 blur-[300px] dark:block md:hidden"
        size={340}
      />
    </section>
  );
};

export default Hero;
