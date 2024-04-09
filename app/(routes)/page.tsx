import Disclaimer from "@/app/(routes)/components/disclaimer";
import Header from "@/app/(routes)/components/hero";
import TextBlock from "@/app/(routes)/components/text-block";
import Tokenomics from "@/app/(routes)/components/tokenomics/tokenomics";
import Wallets from "@/app/(routes)/components/wallets/wallets";

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
