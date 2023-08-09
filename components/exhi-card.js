import Image from "next/image";
import React from "react";

const ExhibitionCard = ({
  namaKelompok="Kelompok1",
  namaProjek="Projek1",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quam!",
  imageUrl = "/logo.png",
  imageAlt = "Test",
  width = 300,
  height = 300,
}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom right, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 120%)",
      }}
      className="w-full hover:scale-105 transition duration-300 ease-in-out min-h-[400px] sm:min-h-[400px] md:min-h[370px] lg:min-h-[370px] text-white font-montserrat items-center rounded-lg bg-gradient-to-br from-[##FFFFFF1A] to-[#FFFFFF40] relative grid grid-rows-2"
    >   
        <div className={`justify-evenly w-full h-full object-center object-contain bg-[url('/logo.png')]`}></div>

        {/* <Image
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        className={`justify-evenly w-full h-[100px] object-center object-contain `}>
        </Image> */}

        <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl">{namaKelompok}</h2>
            <h3 className="font-bold text-2xl">{namaProjek}</h3>
            <p className="text-center text-lg">{description}</p>
        </div>
    </div>
  );
};

export default ExhibitionCard;