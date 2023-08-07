import React from "react";

const Event = () => {
  return (
    <div className="py-[45px]">
      <h1 className=" mt-[200px] text-center text-[#FADE7A] font-montserrat text-[54px] font-[700] tracking-[0.54px] leading-[140%]">
        Our{" "}
        <span className=" text-center text-[#fff] font-montserrat text-[54px] font-[700]">
          Events
        </span>
      </h1>

      <div className="mt-[100px] flex justify-center gap-[310px]">
        <div className="shrink-[2] w-[420px] h-[250px] text-[#FFF] bg-gradient-to-br from-[#FFFFFF40] to-[125%] to-[#7515D61A] font-montserrat text-[16px] font-[400] rounded-[10px] py-[10px] px-[20px]">
          <div className="mt-[70px] flex flex-col items-center justify-center gap-[15px]">
            <h2 className="w-[187px] h-[16px] text-center text-[#fff] font-montserrat text-[24px] font-[700]">
              Exhi(Byte)On
            </h2>

            <p className="mt-[10px] w-[292px] text-center text-[#fff] font-montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
              Pameran karya milestone angkatan BYTE dengan tema Sustainable
              Development Goals
            </p>

            <button className=" shrink-[2] w-[150px] h-[25px] text-[#FFF] bg-gradient-to-l from-[#7721D6] to-[150%] to-[rgba(119, 33, 214, 0.00)] font-montserrat text-[16px] font-[600] rounded-[10px]">
              KUNJUNGI
            </button>
          </div>
        </div>

        <div className="shrink-[2] w-[420px] h-[250px] text-[#FFF] bg-gradient-to-br from-[#FFFFFF40] to-[125%] to-[#7515D61A] font-montserrat text-[16px] font-[400] rounded-[10px] py-[10px] px-[20px]">
          <div className="mt-[70px] flex flex-col items-center justify-center gap-[15px]">
            <h2 className="w-[187px] h-[16px] text-center text-[#fff] font-montserrat text-[24px] font-[700]">
              Cup
            </h2>
            <p className="mt-[10px] w-[292px] text-center text-[#fff] font-montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
              Pertandingan basket dan futsal antar angkatan di HMIF
            </p>
            <button className="mt-[20px] shrink-[2] w-[150px] h-[25px] text-[#FFF] bg-gradient-to-l from-[#7721D6] to-[150%] to-[rgba(119, 33, 214, 0.00)] font-montserrat text-[16px] font-[600] rounded-[10px]">
              KUNJUNGI
            </button>
          </div>
        </div>
      </div>
      <div className="m-auto mt-[40px] shrink-[2] w-[420px] h-[250px] text-[#FFF] bg-gradient-to-br from-[#FFFFFF40] to-[100%] to-[#7515D61A] font-montserrat text-[16px] font-[400] rounded-[10px] py-[10px] px-[20px]">
        <div className="mt-[70px] flex flex-col items-center justify-center gap-[15px]">
          <h2 className="w-[187px] h-[16px] text-center text-[#fff] font-montserrat text-[24px] font-[700]">
            ByteTechSummit
          </h2>
          <p className="mt-[10px] w-[292px] text-center text-[#fff] font-montserrat text-[16px] font-[400] tracking-[0.16px] leading-[140%]">
            Talkshow bersama alumni HMIF dengan tema “Nilai Etika dan Sikap
            sebagai Informatikawan”
          </p>
          <button className=" shrink-[2] w-[150px] h-[25px] text-[#FFF] bg-gradient-to-l from-[#7721D6] to-[150%] to-[rgba(119, 33, 214, 0.00)] font-montserrat text-[16px] font-[600] rounded-[10px]">
            KUNJUNGI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
