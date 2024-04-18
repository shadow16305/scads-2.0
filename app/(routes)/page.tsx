import Hero from "@/app/(routes)/_components/hero";
import TextBlock from "@/app/(routes)/_components/text-block";
import Wallets from "@/app/(routes)/_components/wallets";
import { LampContainer } from "@/components/ui/lamp-effect";
// import CustomBackground from "@/components/ui/custom-background";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative mt-40 md:mt-56">
        <TextBlock />
        <Wallets />
      </div>
    </>
  );
}
