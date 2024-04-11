import SwapModal from "@/components/swap/swap-modal";
import Stats from "./stats/stats";
import { IoEllipse } from "react-icons/io5";

const Header = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 z-0 w-screen bg-gradient-to-b from-[#F4F3F2] to-custom-color dark:bg-none lg:h-3/4" />
      <div className="relative z-10">
        <div className="mx-auto flex justify-center pt-40 lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
          <div className="flex flex-col items-center gap-y-8 text-black dark:text-white lg:max-w-none">
            <h1 className="max-w-[310px] bg-gradient-to-br from-black to-neutral-700 bg-clip-text text-center text-2xl font-bold leading-tight text-transparent dark:from-white dark:to-neutral-500 md:max-w-[800px] lg:text-[44px]">
              The World's First Non-PEGGED self-sustained Stablecoin Powered by
              Proof of Holding
            </h1>
            <div className="dark:text-neutral-300">
              <p className="text-center lg:max-w-[550px] xl:max-w-[700px]">
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
        className="absolute -top-40 left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 text-custom-color blur-[300px] dark:block lg:block"
        size={600}
      />
    </section>
  );
};

export default Header;
