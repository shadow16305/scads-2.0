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
      <DropdownMenuTrigger className="relative invert-0 transition-all focus:outline-none focus:ring-0 md:size-10 lg:size-8 lg:hover:scale-110">
        <Image
          src="/images/address.svg"
          alt="addresses"
          fill
          className="hidden md:block"
        />
        <span className="md:hidden">Addresses</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2 max-w-[340px] rounded-xl border-none bg-dark-blue lg:mr-0 lg:min-w-[512px] lg:max-w-none">
        <DropdownMenuGroup className="flex flex-col space-y-2 px-4 py-3">
          {addresses.map((item) => (
            <DropdownMenuItem
              key={item.address}
              className="flex w-full items-center text-sm"
            >
              <p className="w-[12%] text-white">{item.address}</p>
              <div className="flex w-[88%] items-center justify-between gap-x-2 rounded-3xl bg-indigo-600/10 px-4 py-2">
                <p className="min-w-[362px] text-neutral-300">{item.value}</p>
                <button
                  type="button"
                  onClick={() => onCopy(item.value)}
                  className="text-white transition hover:opacity-70"
                >
                  <Copy className="size-4" />
                </button>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddressDropdown;
