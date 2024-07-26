"use client";

import React, { Fragment, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { tokenomicsContent } from "@/constants/content";
import { useTranslation } from "@/contexts/localization";
import { EN, RU } from "@/lib/localization/languages";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<
    (typeof tokenomicsContent)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const { t, currentLanguage } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[600px] flex-col overflow-hidden bg-white/5 backdrop-blur-xl sm:rounded-xl md:h-fit md:max-h-[90%]"
            >
              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.paragraph}-${id}`}
                      className="text-[#B4BCD0]"
                    >
                      {active.paragraph}
                    </motion.p>
                  </div>
                </div>

                {active.list && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-4 text-xs text-[#B4BCD0] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base"
                  >
                    <ul className="flex max-w-[340px] list-disc flex-col gap-y-2 px-8 text-sm md:max-w-[720px] lg:max-w-[900px] xl:max-w-[1031px]">
                      {active.list.map((item, index) => (
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
                  </motion.div>
                )}
                {active.paragraph_two && (
                  <div className="relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-[#B4BCD0] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base"
                    >
                      {active.paragraph_two}
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto mt-4 w-full md:max-w-[768px] lg:max-w-[1024px]">
        {tokenomicsContent.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="my-4 flex cursor-pointer flex-col items-center justify-between rounded-xl bg-white/5 p-4 backdrop-blur-xl md:flex-row"
          >
            <div className="flex flex-col gap-4 md:flex-row ">
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center font-medium text-white md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.preview}-${id}`}
                  className="text-center text-[#B4BCD0] md:text-left"
                >
                  {card.preview}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
