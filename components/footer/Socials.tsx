import clsx from "clsx";
import { FaMediumM } from "react-icons/fa";
import { FaXTwitter, FaTelegram, FaGithub, FaDiscord } from "react-icons/fa6";

const socialLinks = [
  {
    id: "X",
    icon: <FaXTwitter size={28} />,
    path: "https://twitter.com/ScadsSwap",
  },
  {
    id: "Telegram",
    icon: <FaTelegram size={28} />,
    path: "https://t.me/scads_io",
  },
  {
    id: "Github",
    icon: <FaGithub size={28} />,
    path: "https://github.com/scads-io",
  },
  {
    id: "Discord",
    icon: <FaDiscord size={28} />,
  },
  {
    id: "Medium",
    icon: <FaMediumM size={28} />,
  },
];

const Socials:React.FC<{isLight: boolean}> = ({isLight}) => {

  return (
    <div
      className={clsx(
        "mt-6 flex flex-col items-center gap-y-3  lg:mt-0 lg:items-start",
        isLight ? "text-black" : "text-white",
      )}
    >
      <span className="font-semibold">Socials</span>
      <div className="flex items-center gap-x-4">
        {socialLinks.map((link) => (
          <a
            href={link.path}
            target="_blank"
            rel="noreferrer"
            key={link.id}
            className="h-7 w-7 transition-all hover:-translate-y-1 hover:text-lime"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
