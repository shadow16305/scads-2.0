"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { tutorialDesktop } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";

type TabValue = "metamask" | "trust" | "binance";

type Step = {
  label: string;
  list: {
    li1: string | null;
    li2: string | null;
    li3: string | null;
    li4: string | null;
    li5: string | null;
    li6: string | null;
  };
};

const tabsItems = [
  { label: "Metamask", value: "metamask" },
  { label: "Trust wallet", value: "trust" },
  { label: "Binance chain", value: "binance" },
];

const DesktopInfo = () => {
  const [currentTab, setCurrentTab] = useState<TabValue>("metamask");

  return (
    <Tabs defaultValue="metamask" className="relative z-20">
      <TabsList>
        {tabsItems.map((tab) => (
          <TabsTrigger
            key={tab.label}
            value={tab.value as TabValue}
            onClick={() => setCurrentTab(tab.value as TabValue)}
            className="bg-transparent dark:data-[state=active]:bg-white/20"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <AnimatePresence mode="wait">
        <TabsContent
          value={currentTab}
          className="mt-4 h-80 space-y-12 overflow-y-auto overflow-x-hidden"
        >
          {tutorialDesktop[currentTab].map((step: Step, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="w-11/12"
            >
              <div className="space-y-2">
                <p className="text-xl font-medium">{step.label}</p>
                <ol className="space-y-1">
                  {Object.values(step.list).map(
                    (value, i) =>
                      value && (
                        <li key={i}>
                          {value}{" "}
                          {index === 3 && (
                            <>
                              <a
                                href="https://support.metamask.io/hc/en-us/articles/360058239311-How-to-buy-crypto-in-MetaMask"
                                target="_blank"
                                rel="noreferrer"
                                className="text-custom-color"
                              >
                                the {currentTab} wallet
                              </a>{" "}
                              website for help.
                            </>
                          )}
                        </li>
                      ),
                  )}
                </ol>
              </div>
            </motion.div>
          ))}
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
};

export default DesktopInfo;
