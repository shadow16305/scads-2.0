import Image from "next/image";
import Link from "next/link";
import { IoEllipse } from "react-icons/io5";

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
            <button className="group relative rounded-[50px] border-2 border-lime px-10 py-3 font-bold">
              <span className="relative z-10 text-black transition-colors group-hover:text-lime">
                Swap
              </span>
              <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-lime transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
            </button>
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
          className="absolute -bottom-10 -left-28 -z-10 text-[#101F3E] blur-3xl"
          size={300}
        />
        <IoEllipse
          className="absolute -top-32 right-[40%] -z-10 text-lime blur-[200px]"
          size={240}
        />
        <IoEllipse
          className="absolute -right-20 -top-32 -z-10 text-[#101F3E] blur-3xl"
          size={300}
        />
      </section>
    </>
  );
};

export default Header;
