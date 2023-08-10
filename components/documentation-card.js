import Image from "next/image";
import React from "react";

const DocumentationCard = ({ imageUrl, alt, eventName }) => {
  return (
    <div
      className="flex flex-col gap-7 lg:gap-10 w-[130px] md:w-[180px] lg:w-[360px] animate-blink"
      key={eventName}
    >
      <Image
        width={400}
        height={550}
        alt={alt}
        src={imageUrl}
        className="w-full h-[180px] md:h-[240px] lg:h-[484px] object-center object-cover rounded-3xl border-2 lg:border-4 border-[#9999ff] drop-shadow-[0px_2px_5px_12px_#9999ff]"
        style={{ "box-shadow": "0px 4px 4px 0px rgba(249, 238, 238, 0.25)" }}
      />
      <p className="text-white font-montserrat font-semibold text-lg lg:text-2xl">
        {eventName}
      </p>
    </div>
  );
};

export default DocumentationCard;
