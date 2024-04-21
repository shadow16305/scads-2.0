import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addresses } from "@/constants/content";
import Image from "next/image";
import toast from "react-hot-toast";
import { Copy } from "lucide-react";

const AddressDropdown = () => {
  const onCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard.");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative size-10 invert transition-all hover:scale-110 focus:outline-none focus:ring-0 dark:invert-0 lg:size-6">
        <Image src="/images/address.svg" alt="addresses" fill />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2 max-w-[340px] rounded-xl border-none bg-[#f4f3f2] dark:bg-[#0c0e22] lg:mr-0 lg:min-w-[512px] lg:max-w-none">
        <DropdownMenuGroup className="flex flex-col space-y-2 px-4 py-3">
          {addresses.map((item) => (
            <div
              key={item.address}
              className="flex w-full items-center text-sm"
            >
              <p className="w-[12%] text-black dark:text-white">
                {item.address}
              </p>
              <div className="flex w-[88%] items-center justify-between gap-x-2 rounded-3xl bg-white/40 px-4 py-2 dark:bg-white/10">
                <p className="min-w-[362px]">{item.value}</p>
                <button
                  type="button"
                  onClick={() => onCopy(item.value)}
                  className="transition hover:opacity-70"
                >
                  <Copy className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddressDropdown;
