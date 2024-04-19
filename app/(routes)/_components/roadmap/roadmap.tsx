import { roadmapContent } from "@/constants/content";
import RoadmapItem from "./roadmap-item";
import { LampContainer } from "@/components/ui/lamp-effect";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SectionHeader from "@/components/ui/section-header";
import AnimatedBackground from "@/components/ui/animated-background";

const Roadmap = () => {
  return (
    <section className="relative mt-56 space-y-8">
      <LampContainer
        color="violet-500"
        className="absolute -top-20 -z-10 2xl:-top-24"
      />
      <SectionHeader title="Roadmap" />
      <div className="relative mx-auto h-80 w-[340px] rounded-2xl border-x border-t border-white/10 bg-gradient-to-b from-white/15 to-transparent pt-10 backdrop-blur-xl lg:w-[1024px] lg:pt-20">
        <div
          style={{
            backgroundImage: `url("https://thumbs.dreamstime.com/b/white-noise-background-effect-sound-effect-grain-distress-overlay-texture-your-design-grainy-gradient-background-145456887.jpg")`,
          }}
          className="absolute left-0 top-0 -z-10 size-full rounded-xl opacity-10"
        />
        <div className="absolute left-0 top-0 size-full rounded-xl bg-gradient-to-b from-white/5 to-dark-blue" />
        <ScrollArea
          className="z-10 mx-auto pl-4 lg:w-[900px] lg:pl-0"
          type="always"
        >
          <ol className="max-h-80 pb-4 sm:flex lg:max-h-none">
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
          <ScrollBar orientation="horizontal" className="hidden lg:block" />
          <ScrollBar orientation="vertical" className="lg:hidden" />
        </ScrollArea>
        <div className="relative z-10 mx-auto mt-8 flex w-fit items-center justify-center gap-x-2 rounded-xl bg-white/10 px-2 py-1">
          Shift +
          <span className="relative h-8 w-5 rounded-3xl border border-white before:absolute before:left-1/3 before:top-1 before:size-2 before:animate-scroll before:rounded-full before:bg-white" />
        </div>
      </div>
      <AnimatedBackground color="bg-violet-500" />
    </section>
  );
};

export default Roadmap;
