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
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-56 rounded-xl border-none bg-[#F4F3F2]/40 backdrop-blur-xl dark:bg-[#0B1018]/10">
        <DropdownMenuGroup>
          {documents.map((document) => (
            <DropdownMenuItem
              key={document.name}
              className="relative p-0 py-1 text-sm"
            >
              <Link
                href={document.path}
                onClick={close}
                className="z-10 w-full rounded-2xl pl-2 transition"
              >
                {document.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocumentsDropdown;
