import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-5 ">
      <Image
        src="/home-1.svg"
        alt="background home pertama"
        width={800}
        height={800}
        className="absolute -left-0 top-0 z-[10]"
      ></Image>
      <h1 className="mt-[72px] ml-[130px] w-[500px] text-[#FADE7A] font-montserrat text-[54px] font-[700] tracking-[0.54px] leading-[140%]">
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
      <p className="mt-[15px] ml-[130px] flex break-all w-[500px] text-[#FFF] font-montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s
      </p>
      <button className="mt-[30px] ml-[130px] shrink-[2] w-[226px] h-[58px] text-[#FFF] bg-gradient-to-l from-[#7721D6] to-[150%] to-[rgba(119, 33, 214, 0.00)] font-montserrat text-[16px] font-[600] rounded-[10px] py-[10px] px-[20px]">
        EXPLORE MORE
      </button>
      <div className="relative">
        <Image
          src="/home-laptop.png"
          alt="laptop"
          width={500}
          height={500}
          className="absolute left-[425px] bottom-[-50px] z-[10]"
        ></Image>
        <Image
          src="/home-about.svg"
          alt="background"
          width={550}
          height={500}
          className="absolute left-[525px] bottom-[-200px] z-[5]"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
