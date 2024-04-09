import Treasury from "./treasury";
import GeneralStats from "./general-stats";

const Stats = () => {
  return (
    <div className="mx-auto mt-24 flex flex-col gap-y-28 rounded-3xl bg-[#F4F3F2] px-4 shadow-md dark:bg-[#050A12] md:px-0 lg:w-full lg:max-w-[1100px] lg:gap-y-20 xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <GeneralStats />
      <Treasury />
    </div>
  );
};

export default Stats;
