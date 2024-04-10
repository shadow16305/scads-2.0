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

const DocumentsDropdown: React.FC<{ close?: () => void }> = ({ close }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group relative flex items-center gap-x-1 focus:outline-none focus:ring-0">
        Documents
        <FaChevronDown size={12} />
        <span className="bg-custom-color absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl transition-all group-hover:w-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-56 rounded-xl border-none bg-[#F4F3F2]/40 backdrop-blur-xl dark:bg-[#0B1018]/10">
        <DropdownMenuGroup className="text-black dark:text-white">
          {documents.map((document) => (
            <DropdownMenuItem
              key={document.name}
              className="group relative p-0 py-1 text-base"
            >
              <Link
                href={document.path}
                onClick={close}
                className="z-10 w-full rounded-2xl pl-2 transition hover:text-black"
              >
                <span className="relative z-10">{document.name}</span>
                <span className="bg-custom-color absolute left-0 top-0 h-full w-0 transition-all duration-300 group-hover:w-full" />
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocumentsDropdown;
