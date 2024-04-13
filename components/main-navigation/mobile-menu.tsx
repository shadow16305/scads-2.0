import Link from "next/link";
import SwapModal from "../swap/swap-modal";
import DocumentsDropdown from "./documents-dropdown";
import AddressDropdown from "./address-dropdown";
import ThemeToggler from "./theme-toggler";
import WalletModal from "../wallet/wallet-modal";

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
        </Link>
        <DocumentsDropdown close={close} />
        <AddressDropdown />
        <ThemeToggler />
      </div>
      <WalletModal />
    </div>
  );
};

export default MobileMenu;
