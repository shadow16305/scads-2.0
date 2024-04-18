import Treasury from "./treasury";
import GeneralStats from "./general-stats";
import { Separator } from "@/components/ui/separator";

const Stats = () => {
  return (
    <div className="relative mx-auto mt-24 flex max-w-[340px] flex-col gap-y-28 rounded-3xl border border-white/60 bg-white/40 bg-gradient-to-b px-4 backdrop-blur-xl dark:border-white/10 dark:bg-transparent dark:from-white/10 dark:via-transparent dark:to-transparent md:px-0 lg:w-full lg:max-w-[1024px] lg:gap-y-16 xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <GeneralStats />
      <Separator className="absolute left-0 top-1/2 bg-white/60 dark:bg-white/10" />
      <Treasury />
    </div>
  );
};

export default Stats;
