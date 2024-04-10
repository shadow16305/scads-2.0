import Link from "next/link";
import SwapModal from "../swap/swap-modal";
import DocumentsDropdown from "./documents-dropdown";
import AddressDropdown from "./address-dropdown";
import ThemeToggler from "./theme-toggler";

interface MobileMenuProps {
  close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ close }) => {
  return (
    <div className="flex flex-col items-center gap-y-8 py-8">
      <div className="mt-24 flex flex-col items-center gap-y-8 text-black dark:text-white lg:hidden">
        <SwapModal navigation />
        <Link href="/how-to" onClick={close} className="group relative">
          How to
          <span className="bg-custom-color absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl transition-all group-hover:w-full" />
        </Link>
        <DocumentsDropdown close={close} />
        <AddressDropdown />
        <ThemeToggler />
      </div>
      <button className="border-custom-color group relative rounded-[50px] border-2 px-4 py-3 font-bold">
        <span className="group-hover:text-custom-color relative z-10 transition-colors">
          Connect wallet
        </span>
        <div className="bg-custom-color absolute left-0 top-0 h-full w-full scale-[1.03] rounded-3xl transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
      </button>
    </div>
  );
};

export default MobileMenu;
