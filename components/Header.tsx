import Image from "next/image";
import Link from "next/link";
import { IoEllipse } from "react-icons/io5";
import SwapModal from "./swap/SwapModal";

const Header = () => {
  return (
    <>
      <section className="relative mt-40 flex justify-between">
        <div className="flex flex-col gap-y-10 text-white">
          <h1 className="font-medium leading-snug md:max-w-[700px] lg:text-[44px] xl:text-[56px]">
            Save and grow your capital with{" "}
            <span className="text-lime">money you own</span>
          </h1>
          <p className="opacity-70 lg:max-w-[550px] xl:max-w-[700px]">
            Truly decentralized, non-governed money created for you. The only
            asset that brings stability and confidence, can’t be hacked or
            dumped. Mint TWINE that grows in time. Brings stability and
            confidence to Crypto holders, traders, investors and institutional
            organizations.
          </p>
          <div className="flex items-center gap-x-8">
            <SwapModal navigation={false} />
            <Link href="/story" className="group relative font-bold">
              Our story
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-lime/20 to-lime transition group-hover:bg-lime" />
            </Link>
          </div>
        </div>
        <div className="relative h-auto w-[360px]">
          <Image src="/images/header-image.svg" alt="header image" fill />
        </div>
        <IoEllipse
          className="absolute -bottom-20 -left-96 -z-10 text-[#0F3830]/80 blur-[100px]"
          size={600}
        />
        <IoEllipse
          className="absolute -top-32 right-[40%] -z-10 text-lime blur-[200px]"
          size={240}
        />
        <IoEllipse
          className="absolute -right-20 -top-32 -z-10 text-[#0F3830]/80 blur-3xl"
          size={300}
        />
      </section>
    </>
  );
};

export default Header;
