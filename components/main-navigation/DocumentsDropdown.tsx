import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const documents = [
  {
    name: "Roadmap",
    path: "/roadmap",
  },
  {
    name: "Use Cases",
    path: "/use-cases",
  },
  {
    name: "Whitepaper",
    path: "/whitepaper",
  },
];

const DocumentsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group relative flex items-center gap-x-1 focus:outline-none focus:ring-0">
        Documents
        <FaChevronDown size={12} />
        <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl bg-lime transition-all group-hover:w-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-56 rounded-xl border-none bg-[#0B1018]">
        <DropdownMenuGroup className="text-lime">
          {documents.map((document) => (
            <DropdownMenuItem
              className="group relative rounded-2xl hover:text-black"
              key={document.name}
            >
              <Link href={document.path} className="z-10">
                {document.name}
              </Link>
              <span className="absolute left-0 top-0 h-full w-0 bg-lime transition-all duration-300 group-hover:w-full" />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocumentsDropdown;
