import { statItems } from "@/constants/constants";
import clsx from "clsx";
import { motion } from "framer-motion";

const GeneralStats: React.FC<{ isLight: boolean }> = ({ isLight }) => {
  return (
    <div className="flex items-end justify-center">
      <div className="h-96 w-0.5 bg-lime/10 lg:hidden" />
      <div className="z-20 flex flex-col items-center gap-y-4 px-8 pt-8 lg:w-full lg:flex-row lg:items-start lg:justify-between">
        {statItems.map((item) => (
          <div
            key={item.id}
            className="flex min-w-full items-center gap-x-3 lg:min-w-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={clsx(
                "rounded-full p-2",
                isLight ? "bg-lime" : "bg-lime/20 text-lime",
              )}
            >
              <div className="relative [&>*]:size-7">{item.icon}</div>
            </motion.div>
            <div className="flex flex-col gap-y-1">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={clsx(
                  "text-sm",
                  isLight ? "font-semibold" : "text-lime",
                )}
              >
                {item.name}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={clsx(isLight ? "text-black" : "text-white")}
              >
                {item.placeholder}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralStats;
