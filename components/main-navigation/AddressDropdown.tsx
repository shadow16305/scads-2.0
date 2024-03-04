import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addresses } from "@/constants/constants";
import clsx from "clsx";
import Image from "next/image";

const AddressDropdown: React.FC<{ isLight: boolean }> = ({ isLight }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={clsx(
          "transition-all hover:scale-105 focus:outline-none focus:ring-0",
          isLight && "invert",
        )}
      >
        <Image
          src="/images/address.svg"
          alt="addresses"
          width={24}
          height={24}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 rounded-xl border-none bg-[#0B1018]">
        <DropdownMenuGroup className="flex flex-col space-y-2 px-2 pt-3 text-white">
          {addresses.map((item) => (
            <p className="text-sm" key={item.address}>
              {item.address}
            </p>
          ))}
          <DropdownMenuItem></DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddressDropdown;
