import { roadmapContent } from "@/constants/content";
import RoadmapItem from "./roadmap-item";
import RoadmapHeader from "./roadmap-header";
import { LampContainer } from "@/components/ui/lamp-effect";
import { ScrollArea } from "@/components/ui/scroll-area";

const Roadmap = () => {
  
  return (
    <section className="relative mt-56 space-y-8">
      <LampContainer color="custom-color" className="absolute -top-24 -z-10" />
      <RoadmapHeader />
      <div className="relative mx-auto h-80 rounded-2xl border-x border-t border-white/10 bg-gradient-to-b from-white/15 to-transparent pt-20 backdrop-blur-xl lg:w-[1024px]">
        <ScrollArea className="lg:w-[900px] mx-auto" type="always">
        <ol className="sm:flex pb-4">
          {roadmapContent.map((item) => (
            <RoadmapItem
              key={item.id}
              date={item.date}
              l1={item.l1}
              l2={item.l2}
              l3={item.l3}
            />
          ))}
        </ol>
        </ScrollArea>
        <div className="flex justify-center mx-auto mt-8 items-center w-fit bg-white/10 rounded-xl px-2 py-1 gap-x-2">Shift + <span className="w-5 h-8 border border-white relative rounded-3xl before:absolute before:size-2 before:left-1/3 before:top-1 before:bg-white before:rounded-full before:animate-scroll"/></div>
        <div className="absolute left-1/2 top-0 size-64 -translate-x-1/2 rounded-full bg-custom-color blur-[200px]" />
      </div>
    </section>
  );
};

export default Roadmap;
