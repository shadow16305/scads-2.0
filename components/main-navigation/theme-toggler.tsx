import { motion, AnimatePresence } from "framer-motion";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="z-50 box-border flex h-8 w-16 cursor-pointer items-center justify-end rounded-3xl bg-[#050A12] px-1 py-2 transition-all duration-300 dark:justify-start dark:bg-white/10"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <motion.div
        layout
        className="flex size-6 items-center justify-center rounded-full bg-[#f4f3f2]"
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
