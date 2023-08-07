import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-5 ">
      <h1 className="w-[500px] text-[#FADE7A] font-sans md: Montserrat text-[54px] font-[700] tracking-[0.54px] leading-[140%]">
        Hello,
        <span className="text-[#fff] font-sans md: Montserrat text-[54px] font-[700]">
          {" "}
          Welcome to
        </span>{" "}
        <span className="text-[#fff] font-sans md: Montserrat text-[54px] font-[700]">
          BYTE
        </span>{" "}
        Website
      </h1>
      <p className="flex break-all w-[500px] text-[#FFF] font-sans md: Montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <button className="shrink-[2] w-[226px] h-[58px] text-[#FFF] bg-gradient-to-l from-[#7721D6] to-[175%] to-[rgba(119, 33, 214, 0.00)] font-sans md: Montserrat text-[16px] font-[400] rounded-[10px] py-[10px] px-[20px]">
        EXPLORE MORE
      </button>
    </div>
  );
};

export default Hero;
