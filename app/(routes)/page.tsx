import Hero from "@/app/(routes)/components/hero";
import TextBlock from "@/app/(routes)/components/text-block";
import Wallets from "@/app/(routes)/components/wallets";
import CustomBackground from "@/components/ui/custom-background";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative mt-40 md:mt-56">
        <CustomBackground />
        <TextBlock />
        <Wallets />
      </div>
    </>
  );
}
