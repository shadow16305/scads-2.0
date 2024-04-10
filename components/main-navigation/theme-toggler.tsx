import { motion, AnimatePresence } from "framer-motion";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="dark:bg-custom-color/10 z-50 box-border flex h-8 w-16 cursor-pointer items-center justify-end rounded-3xl bg-[#050A12] px-1 py-2 transition-all duration-300 dark:justify-start"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <motion.div
        layout
        className="bg-custom-color flex h-6 w-6 items-center justify-center rounded-full dark:bg-white"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="text-black"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MdOutlineWbSunny className="dark:hidden" />
            <IoMoonOutline className="hidden dark:block" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};
export default ThemeToggler;
