import CustomHero from "@/components/ui/custom-hero";
import { IoEllipse } from "react-icons/io5";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";

const TokenomicsPage = () => {
  return (
    <>
      <CustomHero title="Tokenomics" />
      <div className="relative mx-auto flex scroll-smooth md:gap-x-10 lg:max-w-[1024px] lg:gap-x-20 xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <ExpandableCardDemo />
      </div>
      <IoEllipse
        className="absolute -top-1/2 left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-2/3 bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] text-transparent blur-[800px] lg:block"
        size={1000}
      />
      <IoEllipse
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 text-indigo-600/80 blur-[300px] md:hidden"
        size={340}
      />
    </>
  );
};

export default TokenomicsPage;
