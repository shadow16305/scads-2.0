import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <MdOutlineWbSunny className="size-5 dark:hidden" />
      <IoMoonOutline className="hidden size-5 dark:block" />
    </button>
  );
};
export default ThemeToggler;
