import SwapModal from "@/components/swap/swap-modal";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

const Outro = () => {
  return (
    <section className="mt-32 flex flex-col items-center">
      <Image src="/images/logo.svg" alt="logo" width={80} height={80} />
      <h2 className="mx-auto mt-8 bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent lg:max-w-[700px] 2xl:text-7xl">
        The change is here
      </h2>
      <div className="relative h-8 w-[40rem]">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-custom-color to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-custom-color to-transparent" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="size-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 h-full w-full bg-dark-blue [mask-image:radial-gradient(200px_200px_at_top,transparent_20%,white)]" />
      </div>
      <SwapModal triggerClassName="mt-12" />
    </section>
  );
};

export default Outro;
