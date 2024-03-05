import Link from "next/link";
import SwapModal from "../swap/SwapModal";
import DocumentsDropdown from "./DocumentsDropdown";
import AddressDropdown from "./AddressDropdown";
import ThemeToggler from "./ThemeToggler";
import clsx from "clsx";

interface MobileMenuProps {
  isLight: boolean;
  toggleTheme: () => void;
  close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isLight,
  toggleTheme,
  close,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-8 py-8">
      <div
        className={clsx(
          "mt-24 flex flex-col items-center gap-y-8 lg:hidden",
          isLight ? "text-black" : "text-white",
        )}
      >
        <SwapModal navigation />
        <Link href="/how-to" onClick={close} className="group relative">
          How to
          <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
        </Link>
        <DocumentsDropdown close={close} />
        <AddressDropdown isLight={isLight} />
        <ThemeToggler isOn={isLight} setIsOn={toggleTheme} />
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
