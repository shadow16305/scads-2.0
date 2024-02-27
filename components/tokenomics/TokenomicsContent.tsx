"use client";

import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import { useContext } from "react";

interface TokenomicsContentProps {
  paragraph: string;
  paragraph_two?: string;
  list?: {
    list_one?: string;
    list_two?: string;
    list_three?: string;
  }[];
}

const TokenomicsContent: React.FC<TokenomicsContentProps> = ({
  paragraph,
  paragraph_two,
  list,
}) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        "my-6 flex flex-col items-center gap-y-2",
        themeCtx.isLight ? "text-black" : "text-white",
      )}
    >
      <p className="max-w-[340px] lg:max-w-[900px] xl:max-w-[1031px]">
        {paragraph}
      </p>
      {list && (
        <ul className="flex max-w-[340px] flex-col gap-y-2 lg:max-w-[900px] xl:max-w-[1031px]">
          {list.map((item, index) => (
            <li key={index}>
              {item.list_one && <p>{item.list_one}</p>}
              {item.list_two && <p>{item.list_two}</p>}
              {item.list_three && <p>{item.list_three}</p>}
            </li>
          ))}
        </ul>
      )}
      {paragraph_two && <p className="max-w-[1031px]">{paragraph_two}</p>}
    </div>
  );
};

export default TokenomicsContent;
