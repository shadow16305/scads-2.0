import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cardItems } from "@/constants/content";
import SectionHeader from "@/components/ui/section-header";

const Wallets = () => {
  return (
    <section className="relative mx-auto mt-40 flex flex-col items-center gap-y-4 dark:bg-transparent lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <SectionHeader title="Wallets" />
      <div className="flex max-w-[340px] flex-col flex-wrap gap-8 md:max-w-[768px] lg:max-w-[1024px] lg:flex-row">
        <HoverEffect items={cardItems} />
      </div>
      <div className="absolute -z-10 h-full w-screen -skew-y-6 bg-gradient-to-r from-custom-color via-[#B5FFFC] to-purple-800 blur-[400px] dark:hidden" />
      <div className="absolute -z-10 w-full">
        <div className="flex h-[40rem] w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-dark-blue dark:bg-grid-violet-500/[0.4]" />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-dark-blue/90 via-transparent to-dark-blue/90" />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-dark-blue via-transparent to-dark-blue" />
      </div>
    </section>
  );
};

export default Wallets;
