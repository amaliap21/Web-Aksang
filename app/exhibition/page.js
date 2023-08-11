import ExhibitionCard from "@/components/exhi-card";
import Image from "next/image";

export default function Home() {
    return (
      <main
      className="p-10 lg:p-24 bg-custom-blue overflow-hidden">

        <Image
        src="/Group 49.png"
        alt="3D Hexagon"
        width={264.87*1.3}
        height={226.24*1.3}
        className=" absolute w-[140px] sm:w-[180px] md:w-[220px] lg:w-[290px] xl:w-[400px] top-[90px] -left-[50px] lg:top-[210px] xl:top-[190px] xl:-left-[80px]"
        ></Image>

        <Image
        src="/Halograph.png"
        alt="3D Hexagon"
        width={264.87*1.3}
        height={226.24*1.3}
        className="absolute w-[140px] sm:w-[180px] md:w-[220px] lg:w-[290px] xl:w-[400px] top-[50px] -right-[30px] md:top-[50px] md:-right-[70px] lg:top-[120px] xl:top-[40px] xl:-right-[130px]"
        >

        </Image>
        
        <div className="flex flex-col mb-10 items-center">
          <h1 className="my-2 lg:my-8 text-4xl lg:text-6xl xl:text-7xl font-bold scale-x-105">Exhi<span className="text-custom-yellow">(byte)</span>on</h1>
          <p className="mt-8 text-center text-sm md:text-md lg:text-lg xl:text-xl px-10 sm:px-24 md:px-36 xl:px-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut corporis ad culpa at ea iure! Ratione ullam, dolorum alias quo dolor esse nam ipsum corporis, ipsam aut tenetur? Vel illo minima error illum natus. Esse reprehenderit hic ex qui rem voluptas. Expedita aliquid reiciendis magni, eos dolorum minima similique odit</p>
        </div>

        <div className="flex flex-col mb-24 items-center ">
          <p className=" text-center text-sm md:text-lg xl:text-xl w-[140px] sm:w-[180px] lg:w-[250px] xl:w-[13vw] py-7 scale-y-90 bg-gradient-to-l from-[rgba(119,33,214,1)] via-[rgba(119,33,214,0.6)] to-[rgba(119,33,214,0.3)] rounded-xl">VOTE NOW</p>
        </div>

        <div className="grid min-h-screen gap-[6vw] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <ExhibitionCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
          >
          </ExhibitionCard>
          <ExhibitionCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusantium sunt qui repellat!"
          >
          </ExhibitionCard>
          <ExhibitionCard
          >
          </ExhibitionCard>
          <ExhibitionCard
          >
          </ExhibitionCard>
          <ExhibitionCard
          >
          </ExhibitionCard>
          <ExhibitionCard
          >
          </ExhibitionCard>
          <ExhibitionCard
          >
          </ExhibitionCard>
          <ExhibitionCard
          >
          </ExhibitionCard>
          <ExhibitionCard
          >
          </ExhibitionCard>
          </div>
      </main>
    );
  }
  
  export const metadata = {
    title: "Byte | Exhi(byte)on",
    description: "Website aksi angkatan Byte",
  };