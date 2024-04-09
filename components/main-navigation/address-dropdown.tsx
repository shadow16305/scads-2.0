import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addresses } from "@/constants/content";
import Image from "next/image";

const AddressDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="invert transition-all hover:scale-105 focus:outline-none focus:ring-0 dark:invert-0">
        <Image
          src="/images/address.svg"
          alt="addresses"
          width={24}
          height={24}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2 max-w-[340px] rounded-xl border-none bg-[#0B1018] lg:mr-0 lg:max-w-none">
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
