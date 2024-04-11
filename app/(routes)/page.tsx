import Disclaimer from "@/app/(routes)/components/disclaimer";
import Hero from "@/app/(routes)/components/hero";
import TextBlock from "@/app/(routes)/components/text-block";
import Tokenomics from "@/app/(routes)/components/tokenomics/tokenomics";
import Wallets from "@/app/(routes)/components/wallets/wallets";
import CustomBackground from "@/components/ui/custom-background";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative mt-56">
        <CustomBackground />
        <TextBlock />
        <Wallets />
      </div>
      <div className="mx-auto lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <Tokenomics />
        <Disclaimer />
      </div>
    </>
  );
}
