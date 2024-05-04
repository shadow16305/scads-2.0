import { tokenomicsContent } from "@/constants/content";
import SideNavigation from "./_components/side-navigation";
import TokenomicsContent from "./_components/tokenomics-content";
import CustomHero from "@/components/ui/custom-hero";
import { IoEllipse } from "react-icons/io5";

const TokenomicsPage = () => {
  return (
    <>
      <CustomHero title="Tokenomics" />
      <div className="relative z-10">
        <div className="relative mx-auto flex scroll-smooth pt-12 md:gap-x-10 lg:max-w-[1024px] lg:gap-x-20 xl:max-w-[1240px] 2xl:max-w-[1340px]">
          <SideNavigation />
          <article className="space-y-12">
            {tokenomicsContent.map((item) => (
              <TokenomicsContent
                key={item.id}
                id={item.id}
                title={item.title}
                paragraph={item.paragraph}
                paragraph_two={item.paragraph_two}
                list={item.list}
              />
            ))}
          </article>
        </div>
        <IoEllipse
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 text-indigo-600/80 blur-[300px] md:hidden"
          size={340}
        />
      </div>
    </>
  );
};

export default TokenomicsPage;
