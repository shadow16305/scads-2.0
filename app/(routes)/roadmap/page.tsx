import { roadmapContent } from "@/constants/content";
import RoadmapItem from "@/app/(routes)/roadmap/components/roadmap-item";

const Roadmap = () => {
  return (
    <article className="mx-auto mt-40 space-y-12 px-4 lg:px-0 xl:max-w-[1240px]">
      <h1 className="text-center text-4xl text-black dark:text-lime">
        Roadmap
      </h1>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {roadmapContent.map((item) => (
          <RoadmapItem
            key={item.id}
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
