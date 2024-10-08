import Image from "next/image";
import React from "react";

const Benefit = (text = "") => {
  return (
    <div className="box-border w-[150px] tmd:w-[200px] sm:w-[220px] lg:w-[275px] h-fit flex flex-col justify-center items-center gap-[20px]">
      <div className="box-border w-32 lg:w-40 aspect-square rounded-[20px] bg-gradient-diagonals from-[#9999FF] via-[#9999FF9E] to-[#9999FF00] flex justify-center items-center">
        <Image
          src={text.imageUrl}
          alt="benefit"
          width={500}
          height={500}
          className="w-20 max-w-3/5"
        />
      </div>
      <h2 className="text-[16px] lg:text-xl break-words text-center font-montserrat">
        {text.texts}
      </h2>
    </div>
  );
};

export default Benefit;
