import Treasury from "./treasury";
import GeneralStats from "./general-stats";
import { IoEllipse } from "react-icons/io5";

const Stats = () => {
  return (
    <div className="mx-auto mt-24 flex max-w-[340px] flex-col gap-y-28 rounded-3xl bg-[#F4F3F2]/40 from-[#F4F3F2]/10 via-transparent to-transparent px-4 shadow-md backdrop-blur-xl dark:border dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b md:px-0 lg:w-full lg:max-w-[1024px] lg:gap-y-16 xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <GeneralStats />
      <Treasury />
      <IoEllipse
        className="absolute -right-1/2 bottom-0 -z-10 hidden text-custom-color/80 blur-[800px] dark:lg:block"
        size={400}
      />
    </div>
  );
};

export default Stats;
