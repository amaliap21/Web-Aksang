import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className=" text-center text-[#FADE7A] font-montserrat text-[54px] font-[700] tracking-[0.54px] leading-[140%]">
        About{" "}
        <span className=" text-center text-[#fff] font-montserrat text-[54px] font-[700]">
          Us
        </span>
      </h1>
      <p className=" mt-[40px] ml-auto pl-[130px] flex break-all w-[750px] h-[308] text-[#FFF] font-montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br />
        <br />
        Quam quisque id diam vel quam. Ac auctor augue mauris augue. Enim sed
        faucibus turpis in eu mi bibendum neque egestas. Placerat in egestas
        erat imperdiet sed. Sed odio morbi quis commodo odio aenean. Tincidunt
        tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Faucibus
        et molestie ac feugiat sed lectus vestibulum. Nisl nunc mi ipsum
        faucibus vitae aliquet nec ullamcorper.
      </p>

      <div className="relative">
        <Image
          src="/home-gajah.png"
          alt="gajah"
          width={800}
          height={800}
          className="absolute left-[-365px] bottom-[-300px] z-[10]"
        ></Image>
        <Image
          src="/home-gajah.svg"
          alt="background"
          width={550}
          height={500}
          className="absolute left-[-385px] bottom-[-120px] z-[5]"
        ></Image>
      </div>
    </div>
  );
};

export default About;
