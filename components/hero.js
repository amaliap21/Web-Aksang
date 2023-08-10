import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src="/home-atas.svg"
        alt="background atas"
        width={500}
        height={500}
        className="absolute -left-0 top-0 w-[200px] lg:w-fit"
      ></Image>

      <div className="flex flex-col md:flex-row">
        <div className="w-full flex flex-col-reverse items-center justify-center lg:items-start lg:flex-row lg:justify-start lg:gap-20 2xl:gap-[300px] xl:px-20">
          <div className="flex-1 flex flex-col justify-start px-25">
            <h1 className="text-custom-yellow font-montserra  lg:leading-[70px] text-[30px] lg:text-5xl font-bold tracking-[0.54px]">
              Hello,
              <span className="text-white font-montserrat text-[30px] lg:text-5xl font-bold">
                {" "}
                Welcome to
              </span>{" "}
              <span className="text-white font-montserrat text-[30px] lg:text-5xl font-bold">
                BYTE
              </span>{" "}
              Website
            </h1>
            <p className="mt-[15px] flex  text-white font-montserrat text-[16px] lg:text-xl font-[400] tracking-[0.16px] leading-[140%]">
              “Byte” merupakan anggota dari angkatan IF/STI 2022. Selamat datang
              di kanal media Byte, yuk eksplorasi bersama!
            </p>
            <Link href="/">
              <button className="mt-[30px] w-[180px] h-[45px] lg:w-[226px] lg:h-[58px] text-white hover:bg-[#3c21d6] duration-300 transition bg-gradient-to-l from-[#7721D6] to-[150%] to-[rgba(119, 33, 214, 0.00)] font-montserrat text-sm lg:text-[16px] font-semibold rounded-[10px] py-[10px] px-[20px]">
                EXPLORE MORE
              </button>
            </Link>
          </div>
          <Image
            src="/laptop.png"
            alt="laptop"
            width={500}
            height={500}
            className="w-[225px] h-[225px] lg:w-[400px] drop-shadow-[2px_5px_4px_12px_#FFFFFF] lg:h-[400px] z-[2] object-center object-contain"
          />

          <Image
            src="/home-laptop.svg"
            alt="background laptop"
            width={750}
            height={700}
            className="w-[450px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]  absolute right-[-100px] top-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
