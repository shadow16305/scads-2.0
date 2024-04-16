import Image from "next/image";

const CustomBackground = () => {
  return (
    <div className="hidden h-full w-full dark:block">
      <Image
        src="/images/stars.png"
        alt="stars"
        width={800}
        height={800}
        className="absolute -top-32 left-1/3 hidden rotate-90 lg:block"
      />
      <Image
        src="/images/stars.png"
        alt="stars"
        width={800}
        height={800}
        className="absolute -bottom-48 left-1/4 hidden rotate-[280deg] lg:block"
      />
      <div className="absolute left-1/2 -z-10 size-full -translate-x-1/2 rounded-full bg-custom-color blur-3xl md:size-[600px]" />
      <div className="absolute -bottom-5 left-1/2 -z-10 size-full -translate-x-1/2 rounded-full bg-purple-600 blur-3xl md:size-[600px] lg:-bottom-[5%]" />
      <div className="absolute -top-10 left-0 hidden h-[115%] w-full rounded-[50%] border-y border-y-custom-color/20 bg-dark-blue lg:block" />
      <div className="absolute -top-10 left-0 h-20 w-full rounded-[50%] border-y border-y-custom-color/20 bg-dark-blue lg:hidden" />
      <div className="absolute -bottom-10 left-0 h-20 w-full rounded-[50%] border-y border-y-custom-color/20 bg-dark-blue lg:hidden" />
      <div className="absolute left-0 h-full w-80 bg-gradient-to-r from-dark-blue via-dark-blue to-transparent" />
      <div className="absolute right-0 h-full w-80 bg-gradient-to-l from-dark-blue via-dark-blue to-transparent" />
    </div>
  );
};

export default CustomBackground;
