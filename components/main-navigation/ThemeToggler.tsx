"use client";

import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

interface ThemeTogglerProps {
  isOn: boolean;
  setIsOn: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ isOn, setIsOn }) => {
  return (
    <div
      className={clsx(
        "z-50 box-border flex h-8 w-16 cursor-pointer items-center rounded-3xl px-1 py-2 transition-all duration-300",
        isOn ? "justify-end bg-black" : "justify-start bg-lime/10",
      )}
      data-darkmode={isOn}
      onClick={setIsOn}
    >
      <motion.div
        layout
        className={clsx(
          "flex h-6 w-6 items-center justify-center rounded-full",
          isOn ? "bg-lime" : "bg-white",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="text-black"
            key={isOn ? "moon" : "sun"}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOn ? <MdOutlineWbSunny /> : <IoMoonOutline />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default ThemeToggler;
