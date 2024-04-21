import Hero from "@/app/(routes)/_components/hero";
import TextBlock from "@/app/(routes)/_components/text-block";
import Wallets from "@/app/(routes)/_components/wallets";
import Roadmap from "./_components/roadmap/roadmap";
import Stats from "./_components/stats/stats";
import Tutorial from "./_components/tutorial/tutorial";
import Outro from "./_components/outro";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Wallets />
      <TextBlock />
      <Roadmap />
      <Tutorial />
      <Outro />
    </>
  );
}
