import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-5 overflow-hidden">
      <Image
        src="/home-atas.svg"
        alt="background atas"
        width={800}
        height={800}
        className="absolute -left-0 top-0 z-[10]"
      ></Image>

      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="w-full overflow-hidden flex flex-col-reverse items-center justify-center lg:items-start lg:flex-row lg:justify-start lg:gap-20">
          <div className="flex-1 flex flex-col justify-start px-25">
            <h1 className=" text-[#FADE7A] font-montserrat text-[30px] font-[700] tracking-[0.54px] leading-[140%]">
              Hello,
              <span className="text-[#fff] font-montserrat text-[30px] font-[700]">
                {" "}
                Welcome to
              </span>{" "}
              <span className="text-[#fff] font-montserrat text-[30px] font-[700]">
                BYTE
              </span>{" "}
              Website
            </h1>
            <p className="mt-[15px] flex break-all  text-[#FFF] font-montserrat text-[12px] font-[400] tracking-[0.16px] leading-[140%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
            <button className="mt-[30px]  w-[226px] h-[58px] text-[#FFF] bg-gradient-to-l from-[#7721D6] to-[150%] to-[rgba(119, 33, 214, 0.00)] font-montserrat text-[16px] font-[600] rounded-[10px] py-[10px] px-[20px]">
              EXPLORE MORE
            </button>
          </div>
          <Image
            src="/laptop.png"
            alt="laptop"
            width={500}
            height={500}
            className="w-[225px] h-[225px] lg:w-[400px] lg:h-[400px] z-[2] object-center object-contain"
          />

          <Image
            src="/home-laptop.svg"
            alt="background laptop"
            width={750}
            height={700}
            className="lg:w-[500px] lg:h-[500px] w-[300px] h-[500px] absolute right-[0] top-[100px] z-[1] overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
