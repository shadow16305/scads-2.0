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
import { cn } from "@/lib/utils";

const WalletModal: React.FC<{ navigation?: boolean }> = ({ navigation }) => {
  const walletModal = useWalletModal();

  const onChange = (open: boolean) => {
    if (!open) {
      walletModal.onClose();
    }
  };

  return (
    <Dialog open={walletModal.isOpen} onOpenChange={onChange}>
      <DialogTrigger
        onClick={() => walletModal.onOpen()}
        className={cn(navigation && "mx-auto max-w-40")}
      >
        {walletModal.isConnected ? (
          <Wallet className="hover:text-custom-color transition" />
        ) : (
          <ButtonPrimary
            text={walletModal.isConnected ? "Wallet" : "Connect wallet"}
            className={cn("w-full", navigation && "px-4 py-2 text-sm")}
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
