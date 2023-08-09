import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconCardAlt = ({
  title,
  description,
  buttonText,
  buttonUrl,
  imageUrl,
  imageAlt,
  width = 200,
  height = 200,
  gradientDir = "tr"
}) => {
  return (
    <div className={`w-full sm:w-fit sm:max-w-[430px] lg:min-h-[260px] text-white px-10 pt-[75px] pb-12 lg:pt-[83px] lg:pb-7 font-montserrat items-center rounded-lg bg-gradient-to-${gradientDir} from-[#0f257f] to-[#3646a3] relative flex flex-col gap-2`}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        className={`absolute w-[120px] h-[100px] lg:w-[${width}px] lg:h-[${height}px] object-center object-contain right-1/2 translate-x-1/2 -top-10 lg:bottom-[185px] `}
      />
      <div className="flex flex-col flex-1 justify-between gap-3">
        <div className="flex flex-col items-center justify-start gap-2">
          <h3 className="text-3xl lg:text-4xl text-center font-bold capitalize">{title}</h3>
          <p className="text-base lg:text-lg text-center">{description}</p>
        </div>
        {buttonText && 
        <button
          style={{
            background:
              "linear-gradient(270deg, #7721D6 0%, rgba(119, 33, 214, 0.40) 100%)",
          }}
          className="text-center rounded-2xl px-10 font-semibold font-montserrat py-0.5"
        >
          <Link href={`${buttonUrl}`}>{buttonText}</Link>
        </button>
          }
      </div>
    </div>
  );
};

export default IconCardAlt;
