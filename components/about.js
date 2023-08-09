import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" flex flex-col md:flex-col gap-5 lg:gap-10 overflow-hidden z-10">
      <h1 className=" text-center text-[#FADE7A] font-montserrat text-[32px] lg:text-5xl font-[700] tracking-[0.54px] leading-[140%]">
        About{" "}
        <span className=" text-center text-[#fff] font-montserrat font-[700]">
          Us
        </span>
      </h1>
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="w-full overflow-hidden flex flex-col items-center justify-center lg:items-start lg:flex-row lg:justify-start gap-10 lg:gap-10">
          <Image
            src="/gajah.png"
            alt="gajah"
            width={500}
            height={500}
            className="w-[225px] h-[225px] lg:w-[400px] lg:h-[400px] object-center object-contain"
          />
          <Image
            src="/home-gajah.svg"
            alt="background"
            width={750}
            height={700}
            className="lg:w-[500px] lg:h-[500px] w-[300px] h-[500px] absolute -left-[130px] top-[590px] z-[-1] overflow-hidden"
          />
          <div className="flex-1 flex flex-col justify-start px-25">
            <p className=" flex break-all  text-[#FFF] font-montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Quam quisque id diam vel quam. Ac auctor augue mauris augue. Enim
              sed faucibus turpis in eu mi bibendum neque egestas. Placerat in
              egestas erat imperdiet sed. Sed odio morbi quis commodo odio
              aenean. Tincidunt tortor aliquam nulla facilisi cras fermentum
              odio eu feugiat. Faucibus et molestie ac feugiat sed lectus
              vestibulum. Nisl nunc mi ipsum faucibus vitae aliquet nec
              ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
