import Image from "next/image";

const CustomBackground = () => {
  return (
    <div className="hidden h-full w-full dark:block">
      <Image
        src="/images/stars.png"
        alt="stars"
        width={800}
        height={800}
        className="absolute -top-32 left-1/3 rotate-90"
      />
      <Image
        src="/images/stars.png"
        alt="stars"
        width={800}
        height={800}
        className="absolute -bottom-48 left-1/4 rotate-[280deg]"
      />
      <div className="absolute left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-custom-color blur-3xl" />
      <div className="absolute -bottom-[5%] left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-custom-color blur-3xl" />
      <div className="absolute -top-10 left-0 h-[110%] w-[100%] rounded-[50%] border-y border-y-custom-color/20 bg-[#000212]" />
      <div className="absolute left-0 h-full w-80 bg-gradient-to-r from-[#000212] via-[#000212] to-transparent" />
      <div className="absolute right-0 h-full w-80 bg-gradient-to-l from-[#000212] via-[#000212] to-transparent" />
    </div>
  );
};

export default CustomBackground;
