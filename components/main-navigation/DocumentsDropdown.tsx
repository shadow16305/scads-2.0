import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const DocumentsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group relative flex items-center gap-x-1 focus:outline-none focus:ring-0">
        Documents
        <FaChevronDown size={12} />
        <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-56 rounded-xl border-none bg-[#091224] py-2">
        <DropdownMenuGroup className="text-lime">
          <DropdownMenuItem className="rounded-2xl hover:bg-lime hover:text-black">
            <Link href="/roadmap">Roadmap</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-2xl hover:bg-lime hover:text-black">
            <Link href="/use-cases">Use cases</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-2xl hover:bg-lime hover:text-black">
            <Link href="/whitepaper">Whitepaper</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocumentsDropdown;
