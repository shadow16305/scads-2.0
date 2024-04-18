"use client";

import { IoEllipse } from "react-icons/io5";
import { motion } from "framer-motion";

const CustomHero = ({
  title,
}: {
  title: string;
}) => {
  return (
    <>
        <motion.h1
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="my-32 bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          {title}
        </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="my-32 bg-gradient-to-br from-black to-neutral-600 bg-clip-text py-4 text-center text-3xl font-medium tracking-tight text-transparent dark:hidden md:text-5xl"
      >
        {title}
      </motion.h1>
      <IoEllipse
        className="absolute -top-3/4 left-1/2 -z-10 hidden -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-700 via-[#B5FFFC] to-custom-color text-transparent blur-[200px] dark:hidden lg:block"
        size={800}
      />
      <IoEllipse
        className="absolute -top-3/4 left-1/2 -z-10 hidden -translate-x-1/2 rounded-full bg-gradient-to-r from-custom-color via-custom-color to-purple-600 text-transparent blur-[200px] dark:lg:block"
        size={800}
      />
    </>
  );
};

export default CustomHero;
