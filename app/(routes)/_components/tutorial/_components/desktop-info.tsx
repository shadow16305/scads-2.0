"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { tutorialDesktop } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TabValue = "metamask" | "binance";

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
  { label: "Binance chain", value: "binance" },
];

const DesktopInfo = () => {
  const [currentTab, setCurrentTab] = useState<TabValue>("metamask");

  return (
    <Tabs
      defaultValue="metamask"
      className="relative z-20 flex max-h-96 flex-col items-center md:items-start"
    >
      <TabsList className="w-fit">
        {tabsItems.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value as TabValue}
            onFocus={() => setCurrentTab(tab.value as TabValue)}
            className="rounded-3xl bg-transparent text-white data-[state=active]:bg-white/20"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <AnimatePresence mode="wait">
        <TabsContent
          value={currentTab}
          className="z-20 mt-4 space-y-12 overflow-y-auto overflow-x-hidden overscroll-y-none"
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
                <p className="text-xl font-medium text-white">{step.label}</p>
                <ol className="space-y-1 text-neutral-300">
                  {Object.values(step.list).map(
                    (value, i) => value && <li key={i}>{value}</li>,
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
