import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DesktopInfo from "./_components/desktop-info";
import { LampContainer } from "@/components/ui/lamp-effect";
import SectionHeader from "@/components/ui/section-header";
import AnimatedBackground from "@/components/ui/animated-background";
import MobileInfo from "./_components/mobile-info";

const Tutorial = () => {
  return (
    <section className="relative mt-72">
      <LampContainer
        colorLine="purple-500"
        colorLeft="from-purple-500"
        colorRight="to-purple-500"
        className="absolute -top-20 -z-10 2xl:-top-24"
      />
      <SectionHeader title="Getting started" />
      <Tabs
        defaultValue="desktop"
        className="mx-auto mt-4 flex h-[440px] w-[340px] flex-col gap-x-12 rounded-2xl border-x border-t border-white/10 bg-gradient-to-b from-white/15 to-transparent py-10 backdrop-blur-xl md:w-[768px] md:flex-row md:px-20 lg:w-[1000px]"
      >
        <div
          style={{
            backgroundImage: `url("https://thumbs.dreamstime.com/b/white-noise-background-effect-sound-effect-grain-distress-overlay-texture-your-design-grainy-gradient-background-145456887.jpg")`,
          }}
          className="absolute left-0 top-0 -z-10 size-full rounded-xl opacity-10"
        />
        <div className="absolute left-0 top-0 size-full rounded-xl bg-gradient-to-b from-white/5 to-dark-blue" />
        <TabsList className="relative z-10 flex h-fit gap-y-4 bg-transparent px-6 md:flex-col">
          <TabsTrigger
            value="desktop"
            className="bg-transparent text-white data-[state=active]:bg-white/20"
          >
            Desktop
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            className="bg-transparent text-white data-[state=active]:bg-white/20"
          >
            Mobile
          </TabsTrigger>
        </TabsList>
        <div>
          <TabsContent value="desktop" className="pl-2 md:pl-0">
            <DesktopInfo />
          </TabsContent>
          <TabsContent value="mobile" className="pl-2 md:pl-0">
            <MobileInfo />
          </TabsContent>
        </div>
      </Tabs>
      <AnimatedBackground color="bg-purple-500" />
    </section>
  );
};

export default Tutorial;
