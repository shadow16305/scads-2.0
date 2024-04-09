import { useWalletModal } from "@/hooks/use-wallet-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ButtonPrimary from "../ui/button-primary";
import WalletDetails from "./wallet-details";
import WalletList from "./wallet-list";
import { Wallet } from "lucide-react";

const WalletModal = () => {
  const walletModal = useWalletModal();

  const onChange = (open: boolean) => {
    if (!open) {
      walletModal.onClose();
    }
  };

  return (
    <Dialog open={walletModal.isOpen} onOpenChange={onChange}>
      <DialogTrigger onClick={() => walletModal.onOpen()}>
        {walletModal.isConnected ? (
          <Wallet className="transition hover:text-lime" />
        ) : (
          <ButtonPrimary
            text={walletModal.isConnected ? "Wallet" : "Connect wallet"}
            className="w-full"
          />
        )}
      </DialogTrigger>
      <DialogContent className="space-y-4 border-none dark:bg-[#0A1018]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {walletModal.isConnected ? "Your wallet" : "Wallets"}
          </DialogTitle>
        </DialogHeader>
        {walletModal.isConnected ? (
          <WalletDetails setDisconnected={() => walletModal.onDisconnect()} />
        ) : (
          <WalletList setConnected={() => walletModal.onConnect()} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
