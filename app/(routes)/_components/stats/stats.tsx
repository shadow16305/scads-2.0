import Treasury from "./treasury";
import GeneralStats from "./general-stats";
import { Separator } from "@/components/ui/separator";

const Stats = () => {
  return (
    <div className="relative mx-auto mt-40 flex max-w-[340px] flex-col gap-y-28 rounded-3xl border border-white/10 bg-transparent bg-gradient-to-b from-white/5 via-transparent to-transparent px-4 backdrop-blur-xl md:px-0 lg:w-full lg:max-w-[1024px] lg:gap-y-16 xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <GeneralStats />
      <Separator className="absolute left-0 top-1/2 bg-white/10" />
      <Treasury />
      <div className="absolute size-full bg-custom-color/40 blur-[200px]" />
    </div>
  );
};

export default Stats;
