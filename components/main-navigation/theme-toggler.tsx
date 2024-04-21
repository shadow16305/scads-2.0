import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="transition-transform hover:scale-110"
    >
      <MdOutlineWbSunny className="size-7 dark:hidden lg:size-5" />
      <IoMoonOutline className="hidden size-7 dark:block lg:size-5" />
    </button>
  );
};
export default ThemeToggler;
