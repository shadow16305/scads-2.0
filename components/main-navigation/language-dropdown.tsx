"use client";

import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslation } from "@/contexts/localization";
import { languageList } from "@/lib/localization/languages";

const LanguageDropdown = () => {
  const { setLanguage, t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition-transform lg:hover:scale-110">
        <>
          <Globe className="hidden md:block md:size-5 lg:size-6" />
          <span className="md:hidden">{t("Languages")}</span>
        </>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2 max-w-[340px] rounded-xl border-none bg-dark-blue lg:mr-0 lg:max-w-none">
        <DropdownMenuGroup className="text-white">
          {languageList.map((lang) => (
            <DropdownMenuItem
              key={lang.locale}
              onClick={() => setLanguage(lang)}
              className="transition-colors hover:text-[#B4BCD0]"
            >
              {lang.language}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
