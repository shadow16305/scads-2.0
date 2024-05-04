"use client";

import { Separator } from "@/components/ui/separator";
import { useTranslation } from "@/contexts/localization";
import { EN, RU } from "@/lib/localization/languages";
import { Fragment } from "react";

interface TokenomicsContentProps {
  id: string;
  title: string;
  paragraph: string;
  paragraph_two?: string;
  list?: {
    list_one?: string;
    list_two?: string;
    list_three?: string;
    list_four?: string;
  }[];
}

const TokenomicsContent: React.FC<TokenomicsContentProps> = ({
  id,
  title,
  paragraph,
  paragraph_two,
  list,
}) => {
  const { t, currentLanguage } = useTranslation();

  return (
    <section
      className="flex scroll-mt-64 flex-col items-center gap-y-4 px-2 text-sm text-neutral-300 md:px-0 md:text-base lg:items-start"
      id={id}
    >
      <h2 className="w-fit text-2xl text-white">{title}</h2>
      <p className="max-w-[340px] lg:max-w-[900px] xl:max-w-[1031px]">
        {t(paragraph)}
      </p>
      {list && (
        <ul className="flex max-w-[340px] list-disc flex-col gap-y-2 pl-4 lg:max-w-[900px] xl:max-w-[1031px]">
          {list.map((item, index) => (
            <Fragment key={index}>
              {item.list_one && <li>{t(item.list_one)}</li>}
              {currentLanguage === EN && (
                <>
                  {item.list_two && <li>{t(item.list_two)}</li>}
                  {item.list_three && <li>{t(item.list_three)}</li>}
                  {item.list_four && <li>{t(item.list_four)}</li>}
                </>
              )}
              {currentLanguage === RU && id !== "minting-speed" && (
                <>
                  {item.list_two && <li>{t(item.list_two)}</li>}
                  {item.list_three && <li>{t(item.list_three)}</li>}
                  {item.list_four && <li>{t(item.list_four)}</li>}
                </>
              )}
            </Fragment>
          ))}
        </ul>
      )}
      {paragraph_two && <p className="max-w-[1031px]">{t(paragraph_two)}</p>}
      <Separator className="mt-12 bg-white/10" />
    </section>
  );
};

export default TokenomicsContent;
