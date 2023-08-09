import BackIcon from "@/components/icons/back-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex w-screen h-screen fixed z-[10000] items-center justify-center bg-custom-blue py-28 px-20 lg:p-40 2xl:px-[300px]">
      <div className="flex flex-col w-full xl:h-full items-center lg:items-center lg:justify-center lg:flex-row gap-10 lg:gap-20 2xl:gap-32">
        <Image
          src="/robot-404.png"
          width="1920"
          height="1080"
          alt="Error robots"
          className="w-[calc(100%-20px)] max-lg:max-w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px] object-center object-contain"
        ></Image>
        <div className="flex flex-col gap-6 lg:flex-auto justify-between lg:h-full lg:py-0 xl:py-32 2xl:py-10">
          <div className="flex flex-col gap-10 font-montserrat text-white">
            <h1 className="font-bold text-8xl text-center lg:text-left lg:text-[200px] 2xl:text-[250px] p-0 m-0 lg:leading-[180px]">
              4<span className="text-[#2E7CC5]">0</span>4
            </h1>
            <h2 className="tracking-wider text-center lg:text-left text-base lg:text-2xl 2xl:text-4xl">
              We can’t find the page that you’re looking for...
            </h2>
          </div>
          <button
            style={{
              background:
                "linear-gradient(270deg, #7721D6 0%, rgba(119, 33, 214, 0.60) 100%)",
            }}
            className="w-full lg:w-fit flex text-base  lg:text-lg 2xl:text-2xl font-montserrat items-center justify-center gap-3 lg:gap-5 font-semibold px-6 lg:px-8 py-2 lg:py-3 border border-white rounded-2xl"
          >
            <BackIcon
              size={40}
              className="rotate-180 fill-white w-[25px] lg:w-[30px] aspect-square"
            />
            <Link href="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
