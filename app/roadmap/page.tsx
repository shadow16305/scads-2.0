"use client";

import clsx from "clsx";
import { ThemeContext } from "@/contexts/theme-context";
import { useContext } from "react";
import { roadmapContent } from "@/constants/constants";
import RoadmapItem from "@/components/roadmap/RoadmapItem";

const Roadmap = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <article className="mx-auto mt-40 space-y-12 px-4 lg:px-0 xl:max-w-[1240px]">
      <h1
        className={clsx(
          "text-center text-4xl",
          themeCtx.isLight ? "text-black" : "text-lime",
        )}
      >
        Roadmap
      </h1>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {roadmapContent.map((item) => (
          <RoadmapItem
            isLight={themeCtx.isLight}
            date={item.date}
            l1={item.l1}
            l2={item.l2}
            l3={item.l3}
          />
        ))}
      </div>
    </article>
  );
};

export default Roadmap;
