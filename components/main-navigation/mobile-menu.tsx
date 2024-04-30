import Link from "next/link";
import SwapModal from "../swap/swap-modal";
import AddressDropdown from "./address-dropdown";
import WalletModal from "../wallet/wallet-modal";
import { useWalletModal } from "@/hooks/use-wallet-modal";
import Socials from "../socials";

interface MobileMenuProps {
  close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ close }) => {
  const walletModal = useWalletModal();

  return (
    <div className="flex flex-col items-center gap-y-8 py-8">
      <div className="mt-24 flex flex-col items-center gap-y-8 text-white lg:hidden">
        <div className="space-x-4 text-xl font-medium">
          <SwapModal navigation />
          <Link href="/tokenomics" onClick={close} className="group relative">
            Tokenomics
          </Link>
        </div>
        <div className="space-x-4 text-xl font-medium">
          <Link href="/use-cases" onClick={close} className="group relative">
            Use cases
          </Link>
          <Link href="/whitepaper" onClick={close} className="group relative">
            Whitepaper
          </Link>
        </div>
        <div className="flex gap-x-6">
          <AddressDropdown />
          {walletModal.isConnected && <WalletModal />}
        </div>
      </div>
      {!walletModal.isConnected && <WalletModal />}
      <Socials navigation />
    </div>
  );
};

export default MobileMenu;
