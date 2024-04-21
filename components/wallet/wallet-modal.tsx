import { useWalletModal } from "@/hooks/use-wallet-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
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
          <Wallet className="size-7 transition-transform hover:scale-110 lg:size-5" />
        ) : (
          <span
            className={cn(
              "flex w-full items-center justify-center gap-x-2 rounded-[50px] bg-custom-color px-8 py-2 text-base font-bold text-white transition-colors duration-300 hover:bg-[#7480f1]",
              navigation && "px-4 py-2 text-sm",
            )}
          >
            Connect wallet
          </span>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[340px] space-y-4 rounded-3xl border-none bg-[#0c0e22] backdrop-blur-2xl md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">
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
