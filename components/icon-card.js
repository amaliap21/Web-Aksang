import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconCard = ({
  title,
  description,
  buttonText,
  buttonUrl,
  imageUrl,
  imageAlt,
  width = 200,
  height = 200,
}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(148deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.10) 120%)",
      }}
      className="w-full sm:w-fit sm:max-w-[430px] lg:min-h-[260px] text-white px-10 pt-[75px] pb-12 lg:pt-[83px] lg:pb-7 font-montserrat items-center rounded-lg bg-gradient-to-br from-[##FFFFFF1A] to-[#FFFFFF40] relative flex flex-col gap-2"
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        className={`absolute w-[120px] h-[100px] object-center object-contain right-1/2 translate-x-1/2 -top-10 lg:bottom-[185px] `}
      />
      <div className="flex flex-col flex-1 justify-between gap-3">
        <div className="flex flex-col items-center justify-start gap-2">
          <h3 className="text-xl lg:text-2xl text-center font-bold capitalize">{title}</h3>
          <p className="text-sm lg:text-base text-center">{description}</p>
        </div>
        <button
          style={{
            background:
              "linear-gradient(270deg, #7721D6 0%, rgba(119, 33, 214, 0.40) 100%)",
          }}
          className="text-center rounded-2xl px-10 font-semibold font-montserrat py-0.5"
        >
          <Link href={`${buttonUrl}`}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default IconCard;
