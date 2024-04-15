import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent, useState } from "react";

export const HoverEffect = ({
  items,
  className,
  onClick,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
  onClick: (title: string) => void;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleItemClick =
    (title: string) => (event: MouseEvent<HTMLButtonElement>) => {
      onClick(title);
      scrolltoHash("tokenomics");
    };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <button
          type="button"
          onClick={handleItemClick(item.title)}
          key={item?.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-[80%] w-[80%] rounded-3xl bg-custom-color"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </button>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-white/40 p-4 backdrop-blur-2xl dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-br dark:from-transparent dark:to-white/10",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "mt-4 rounded-3xl bg-white/10 py-2 font-bold tracking-wide text-black dark:bg-white/5 dark:text-white",
        className,
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-sm leading-relaxed tracking-wide text-black dark:text-white",
        className,
      )}
    >
      {children}
    </p>
  );
};
