import Disclaimer from "@/components/Disclaimer";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import TextBlock from "@/components/TextBlock";
import Tokenomics from "@/components/tokenomics/Tokenomics";
import Treasury from "@/components/Treasury";
import Wallets from "@/components/wallets/Wallets";

export default function Home() {
  return (
    <>
      <div className="mx-auto lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <Header />
        <Stats />
        <Treasury />
      </div>
      <TextBlock />
      <Wallets />
      <div className="mx-auto lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <Tokenomics />
        <Disclaimer />
      </div>
    </>
  );
}
