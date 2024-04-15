import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import SwapModal from "../swap/swap-modal";
import { documents } from "@/constants/content";

const NavLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden items-center gap-x-8 rounded-3xl border border-white/40 bg-white/20 px-6 text-sm backdrop-blur-2xl dark:border-white/10 dark:bg-white/[.02] dark:text-white lg:flex">
        <NavigationMenuItem>
          <SwapModal navigation />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/how-to"
            className="transition hover:text-neutral-700 dark:hover:text-neutral-400"
          >
            How to
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <NavigationMenuTrigger className="bg-transparent p-0 hover:text-neutral-700 dark:hover:text-neutral-400">
            Documents
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-xl bg-white dark:bg-[#0c0e22]">
            <ul className="flex flex-col gap-y-2 rounded-xl p-2 text-sm text-black dark:text-white md:min-w-64">
              {documents.map((document) => (
                <li key={document.name}>
                  <Link
                    href={document.path}
                    className="flex gap-x-2 rounded-lg p-2 transition-all hover:bg-black hover:text-white dark:hover:bg-white/20"
                  >
                    <div className="pt-0.5 text-neutral-400">
                      {document.icon}
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="flex gap-x-1">{document.name}</span>
                      <span className="text-neutral-400">
                        {document.description}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
