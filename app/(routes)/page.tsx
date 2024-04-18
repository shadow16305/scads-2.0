import Hero from "@/app/(routes)/_components/hero";
import TextBlock from "@/app/(routes)/_components/text-block";
import Wallets from "@/app/(routes)/_components/wallets";
import Roadmap from "./_components/roadmap/roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <TextBlock />
      <Wallets />
      <Roadmap />
    </>
  );
}
