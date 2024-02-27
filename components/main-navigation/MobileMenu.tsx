import Link from "next/link";
import SwapModal from "../swap/SwapModal";
import DocumentsDropdown from "./DocumentsDropdown";

const MobileMenu = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 py-8">
      <div className="mt-24 flex flex-col items-center gap-y-8 text-white lg:hidden">
        <SwapModal navigation />
        <Link href="/how-to" className="group relative">
          How to
          <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
        </Link>
        <DocumentsDropdown />
      </div>
      <button className="group relative rounded-[50px] border-2 border-lime px-4 py-3 font-bold">
        <span className="relative z-10 transition-colors group-hover:text-lime">
          Connect wallet
        </span>
        <div className="absolute left-0 top-0 h-full w-full scale-[1.03] rounded-3xl bg-lime transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
      </button>
    </div>
  );
};

export default MobileMenu;
