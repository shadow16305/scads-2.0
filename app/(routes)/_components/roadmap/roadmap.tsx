import { roadmapContent } from "@/constants/content";
import RoadmapItem from "./roadmap-item";
import { LampContainer } from "@/components/ui/lamp-effect";
import SectionHeader from "@/components/ui/section-header";
import AnimatedBackground from "@/components/ui/animated-background";

const Roadmap = () => {
  return (
    <section className="relative mt-72 space-y-8">
      <LampContainer
        colorLine="violet-500"
        colorLeft="from-violet-500"
        colorRight="to-violet-500"
        className="absolute -top-20 -z-10 2xl:-top-24"
      />
      <SectionHeader title="Roadmap" />
      <div className="relative mx-auto flex h-96 w-[340px] flex-col rounded-2xl py-10 backdrop-blur-xl lg:w-fit lg:px-20">
        <div
          style={{
            backgroundImage: `url("https://thumbs.dreamstime.com/b/white-noise-background-effect-sound-effect-grain-distress-overlay-texture-your-design-grainy-gradient-background-145456887.jpg")`,
          }}
          className="absolute left-0 top-0 -z-10 size-full rounded-xl opacity-10"
        />
        <div className="absolute left-0 top-0 z-0 size-full rounded-xl bg-gradient-to-b from-white/15 to-dark-blue" />
        <div className="z-20 h-80 overflow-y-scroll overscroll-contain">
          <ol className="relative border-s border-white/20">
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
        </div>
      </div>
      <AnimatedBackground color="bg-violet-500" />
    </section>
  );
};

export default Roadmap;
