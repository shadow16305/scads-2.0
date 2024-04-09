"use client";

import Image from "next/image";
import Socials from "./socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-32 flex flex-col items-center justify-between pb-8 lg:max-w-[1060px] lg:flex-row lg:items-end xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <div className="flex flex-col items-center gap-y-5 lg:items-start">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={160}
          height={57}
          className="invert dark:invert-0"
        />
        <p className="text-black dark:text-white dark:opacity-70">
          SCADS © Copyright {currentYear}. All rights reserved. ™
        </p>
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
