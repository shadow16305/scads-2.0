import SwapModal from "@/components/swap/swap-modal";
import Stats from "./stats/stats";
import { IoEllipse } from "react-icons/io5";

const Header = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 z-0 w-screen bg-gradient-to-b from-[#F4F3F2] to-lime dark:bg-none lg:h-3/4" />
      <div className="relative z-10">
        <div className="mx-auto flex justify-center pt-40 lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
          <div className="flex flex-col items-center gap-y-8 text-black dark:text-white lg:max-w-none">
            <h1 className="max-w-[310px] text-center text-2xl font-bold leading-tight md:max-w-[860px] lg:text-[44px]">
              Ditch the Bankchains, Own Your Finance{" "}
              <span className="dark:text-lime">SCADS - The Crypto DNA</span>
            </h1>
            <div>
              <p className="text-center lg:max-w-[550px] xl:max-w-[700px]">
                The World's First Non-Fiat Stablecoin Powered by{" "}
                <span className="font-semibold dark:text-lime">
                  Proof of Holding
                </span>
              </p>
              <p className="text-center lg:max-w-[550px] xl:max-w-[700px]">
                Mint TWINE simply by owning SCADS!
              </p>
            </div>
            <SwapModal navigation={false} />
          </div>
        </div>
        <Stats />
      </div>
      <IoEllipse
        className="absolute -left-96 top-0 -z-10 hidden -translate-y-1/2 text-lime blur-[300px] dark:block lg:block"
        size={600}
      />
      <IoEllipse
        className="absolute -right-96 top-0 -z-10 hidden -translate-y-1/2 text-lime blur-[300px] dark:block lg:block"
        size={600}
      />
    </section>
  );
};

export default Header;
