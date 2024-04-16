import { tokenomicsContent } from "@/constants/content";
import SideNavigation from "./components/side-navigation";
import TokenomicsContent from "./components/tokenomics-content";
import CustomHero from "@/components/ui/custom-hero";

const TokenomicsPage = () => {
  return (
    <>
      <CustomHero title="Tokenomics" className="fixed top-0" />
      <div className="relative z-10 bg-[#f4f3f2] dark:mt-96 dark:bg-dark-blue">
        <div className="relative mx-auto flex gap-x-20 scroll-smooth pt-12 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
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
      </div>
    </>
  );
};

export default TokenomicsPage;
