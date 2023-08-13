import React from "react";

const ExhibitionCard = ({
  namaKelompok="Kelompok 1",
  namaProjek="Lorem Ipsum",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusantium sunt qui repellat!",
  imageUrl = "/logo.png",
  imageAlt = "Test",
  width = 300,
  height = 300,
}) => {
  return (
    <div className="h-full drop-shadow-xl rounded-3xl bg-gradient-to-br from-[rgba(55,202,140,0.7)] via-[rgba(143,254,207,0.46)] to-[rgba(157,248,204,0.3)] p-1 hover:scale-105 transition duration-300 ease-in-out">
      <div className="h-full bg-[#092079;] rounded-3xl">
        <div
        style={{
          background:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 120%)",
        }}
        className="w-full h-full px-5 pt-5 pb-14 2xl:pb-16 text-white font-montserrat items-center rounded-3xl bg-gradient-to-br from-[##FFFFFF1A] to-[#FFFFFF40] relative"
      >   
          <div className={`rounded-t-[25px] w-full h-[300px] sm:h-[150px] md:h-[240px] object-center object-contain bg-cover bg-[url('/logo.png')]`}></div>

          <div className="w-full py-5 flex flex-col items-center">
              <h2 className="text-center font-bold text-2xl sm:text-2xl lg:text-3xl text-custom-yellow py-1">{namaKelompok}</h2>
              <h3 className="text-center font-bold text-2xl sm:text-2xl lg:text-3xl pb-4 px-2">{namaProjek}</h3>
              <p className="text-center text-lg sm:text-lg lg:text-xl px-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
    
    
};

export default ExhibitionCard;