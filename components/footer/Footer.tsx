import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-32 flex justify-between pb-8 lg:max-w-[1060px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <div className="flex flex-col gap-y-5">
        <Image src="/images/logo.png" alt="logo" width={160} height={57} />
        <p className="text-white opacity-70">
          SCADS © Copyright {currentYear}. All rights reserved. ™
        </p>
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
