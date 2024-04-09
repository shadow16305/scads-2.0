import { wallets } from "@/constants/content";
import Image from "next/image";

const WalletList: React.FC<{ setConnected: () => void }> = ({
  setConnected,
}) => {
  return (
    <ul className="flex items-center justify-between gap-x-4">
      {wallets.map((wallet) => (
        <li key={wallet.name}>
          <button
            type="button"
            className="group flex flex-col items-center"
            onClick={setConnected}
          >
            <Image
              src={wallet.icon}
              alt={wallet.name}
              width={48}
              height={48}
              className="transition-transform group-hover:-translate-y-1 group-hover:scale-105"
            />
            <span className="group-hover:opacity-70">{wallet.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WalletList;
