import React from "react";

const Benefit = (
  text = ''
) => {
    return(
      <div className="box-border w-[275px] h-fit flex flex-col justify-center items-center gap-[20px]">
        <div className="box-border w-40 h-[150px] rounded-[20px] bg-gradient-diagonals from-[#9999FF] via-[#9999FF9E] to-[#9999FF00] opacity-30"></div>
        <h2 className="text-[16px] lg:text-xl break-words text-center font-montserrat">{text.texts}</h2>
      </div>
    )
  };
  
export default Benefit;