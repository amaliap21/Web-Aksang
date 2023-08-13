import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExhibitionCard = ({
  namaKelompok = "Kelompok 1",
  namaProjek = "Lorem Ipsum",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusantium sunt qui repellat!",
  imageUrl = "/logo.png",
  imageAlt = "Test",
  width = 300,
  height = 300,
  linkUrl,
}) => {
  return (
    <div
      key={namaKelompok}
      className="cursor-pointer drop-shadow-xl animate-blink rounded-3xl bg-gradient-to-br from-[rgba(55,202,140,0.7)] via-[rgba(143,254,207,0.46)] to-[rgba(157,248,204,0.3)] p-1 hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="h-full bg-[#092079;] rounded-3xl">
        <div
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 120%)",
          }}
          className="w-full h-full p-3 pb-5  text-white font-montserrat items-center rounded-3xl bg-gradient-to-br from-[##FFFFFF1A] to-[#FFFFFF40] relative"
        >
          <Image
            priority
            width={width}
            height={height}
            src={imageUrl}
            alt={imageAlt}
            className={`rounded-t-3xl w-full h-[200px] sm:h-[150px] md:h-[240px] lg:h-[300px] object-center object-cover bg-[url('/logo.png')]`}
          ></Image>

          <div className="w-full py-4 lg:py-5 flex flex-col items-center gap-1 lg:gap-3 px-2">
            <h2 className="text-center font-bold text-lg lg:text-2xl text-custom-yellow">
              {namaKelompok}
            </h2>
            <h3 className="text-center font-bold text-lg lg:text-2xl -mt-0.5">
              {namaProjek}
            </h3>
            <p className="text-center text-sm lg:text-lg">{description}</p>
          </div>
          {linkUrl && (
            <button className="flex flex-col font-semibold text-white mx-auto text-center text-sm md:text-lg xl:text-xl px-8 py-3 scale-y-90 hover:bg-[#a568e7] bg-gradient-to-r from-[#7721d6] to-[#7721D68A] transition duration-300 rounded-xl">
              <Link href={linkUrl}>VISIT</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
