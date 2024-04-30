import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cardItems } from "@/constants/content";
import SectionHeader from "@/components/ui/section-header";

const Wallets = () => {
  return (
    <section className="relative mx-auto mt-32 flex flex-col items-center gap-y-4 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <SectionHeader title="Wallets" y={50} />
      <div className="flex max-w-[340px] flex-col flex-wrap gap-8 md:max-w-[768px] lg:max-w-[1024px] lg:flex-row">
        <HoverEffect items={cardItems} />
      </div>
      <div className="absolute -z-10 h-full w-full lg:-bottom-28 lg:h-fit">
        <div className="flex h-full w-full items-center justify-center bg-dark-blue bg-grid-violet-500/[0.4] lg:h-[40rem]" />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-dark-blue/90 via-transparent to-dark-blue/90" />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-dark-blue via-transparent to-dark-blue" />
      </div>
    </section>
  );
};

export default Wallets;
