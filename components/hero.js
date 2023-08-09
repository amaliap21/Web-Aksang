import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-5 ">
      <Image
        src="/home-atas.svg"
        alt="background atas"
        width={800}
        height={800}
        className="absolute -left-0 top-0 z-[10]"
      ></Image>

      <div className="flex flex-col justify-start pr-[800px]">
        <h1 className="w-[500px] text-[#FADE7A] font-montserrat text-[54px] font-[700] tracking-[0.54px] leading-[140%]">
          Hello,
          <span className="text-[#fff] font-montserrat text-[54px] font-[700]">
            {" "}
            Welcome to
          </span>{" "}
          <span className="text-[#fff] font-montserrat text-[54px] font-[700]">
            BYTE
          </span>{" "}
          Website
        </h1>
        <p className="mt-[15px] flex break-all w-[500px] text-[#FFF] font-montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </p>
        <button className="mt-[30px] shrink-[2] w-[226px] h-[58px] text-[#FFF] bg-gradient-to-l from-[#7721D6] to-[150%] to-[rgba(119, 33, 214, 0.00)] font-montserrat text-[16px] font-[600] rounded-[10px] py-[10px] px-[20px]">
          EXPLORE MORE
        </button>
      </div>
      <div className="relative">
        <Image
          src="/home-laptop.png"
          alt="laptop"
          width={500}
          height={500}
          className="absolute right-[30px] bottom-[-70px] z-[10]"
        ></Image>
        <Image
          src="/home-laptop.svg"
          alt="background laptop"
          width={550}
          height={500}
          className="absolute right-[-110px] bottom-[-200px] z-[5]"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
