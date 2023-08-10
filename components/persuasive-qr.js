import Image from "next/image";
import Link from "next/link";

export default function PersuasiveQr({
  yellowText,
  whiteText,
  iconLeftUrl,
  qrImageUrl,
  buttonText,
}) {
  return (
    <div className=" flex flex-col items-center lg:gap-10 lg:flex-row py-8 px-6 bg-[#9999FF]/50 rounded-tr-[80px] lg:rounded-tr-[120px] min-h-[290px] lg:min-h-[400px] justify-center">
      <div className="flex flex-row mt-[28px] lg:gap-10 mb-0 lg:my-auto">
        <div className="ml-[14px] lg:ml-[38px]  w-[60px] lg:w-[183px]">
          <Image src={iconLeftUrl} alt="Bell" width={183} height={150} />
        </div>
        <div className="ml-[6px] lg:ml-[30px] ">
          <h2 className="text-[20px] lg:text-[45px] font-bold ">
            <span className="text-custom-yellow">{yellowText} </span> <br />
          </h2>
          <h2 className="text-[16px] lg:text-[45px] text-white font-bold xl:indent-7 2xl:indent-12">
            {whiteText}
          </h2>
        </div>
      </div>
      <div className="flex flex-col my-auto lg:pl-12">
        <div className="mx-auto mt-4">
          <Image
            className="w-[100px] lg:w-[152px]"
            src={qrImageUrl}
            alt="QR Code"
            width={152}
            height={150}
          />
        </div>
        <Link href="https://bit.ly/DaftarBYTECup">
          <button className="mx-auto w-[156px] text-white h-[44px] lg:w-[226px] lg:h-[60px] text-[14px] lg:text-xl bg-[#C53998] border-[#9999FF] mt-[20px] font-semibold rounded-2xl border drop-shadow-xl ">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
