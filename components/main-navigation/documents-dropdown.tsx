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
      <DropdownMenuContent className="mx-auto mt-2 w-32 rounded-xl border-none bg-[#0c0e22] backdrop-blur-xl">
        <DropdownMenuGroup>
          {documents.map((document) => (
            <DropdownMenuItem
              key={document.name}
              className="mx-auto py-1 text-base"
            >
              <Link
                href={document.path}
                onClick={close}
                className="rounded-2xl"
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
