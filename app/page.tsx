import Disclaimer from "@/components/Disclaimer";
import Header from "@/components/Header";
import Stats from "@/components/stats/Stats";
import TextBlock from "@/components/TextBlock";
import Tokenomics from "@/components/tokenomics/Tokenomics";
import Treasury from "@/components/stats/Treasury";
import Wallets from "@/components/wallets/Wallets";

export default function Home() {
  return (
    <>
      <Header />
      <TextBlock />
      <Wallets />
      <div className="mx-auto lg:max-w-[1100px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <Tokenomics />
        <Disclaimer />
      </div>
    </>
  );
}
