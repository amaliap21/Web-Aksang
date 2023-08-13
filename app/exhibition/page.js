import ExhibitionCard from "@/components/exhi-card";
import Image from "next/image";
import ExhibitionClient from "./exhibition-client";

export default function Home() {
  const dummyData = [
    {
      namaKelompok: "Kelompok 1",
      namaProjek: "Project A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/logo.png",
      imageAlt: "Project A",
      width: 1080,
      height: 1920,
      linkUrl: "https://ganesha-space.vercel.app",
    },
    {
      namaKelompok: "Kelompok 2",
      namaProjek: "Project B",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/logo.png",
      imageAlt: "Project B",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 3",
      namaProjek: "Project C",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/logo.png",
      imageAlt: "Project C",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 4",
      namaProjek: "Project D",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: "/logo.png",
      imageAlt: "Project D",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 5",
      namaProjek: "Project E",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/logo.png",
      imageAlt: "Project E",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 6",
      namaProjek: "Project F",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/logo.png",
      imageAlt: "Project F",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 7",
      namaProjek: "Project G",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/logo.png",
      imageAlt: "Project G",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 8",
      namaProjek: "Project H",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/logo.png",
      imageAlt: "Project H",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 9",
      namaProjek: "Project I",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: "/logo.png",
      imageAlt: "Project I",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 10",
      namaProjek: "Project J",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/logo.png",
      imageAlt: "Project J",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 11",
      namaProjek: "Project K",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/logo.png",
      imageAlt: "Project K",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 12",
      namaProjek: "Project L",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/logo.png",
      imageAlt: "Project L",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 13",
      namaProjek: "Project M",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/logo.png",
      imageAlt: "Project M",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 14",
      namaProjek: "Project N",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: "/logo.png",
      imageAlt: "Project N",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 15",
      namaProjek: "Project O",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/logo.png",
      imageAlt: "Project O",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 16",
      namaProjek: "Project P",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/logo.png",
      imageAlt: "Project P",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 17",
      namaProjek: "Project Q",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/logo.png",
      imageAlt: "Project Q",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 18",
      namaProjek: "Project R",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/logo.png",
      imageAlt: "Project R",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 19",
      namaProjek: "Project S",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: "/logo.png",
      imageAlt: "Project S",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 20",
      namaProjek: "Project T",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/logo.png",
      imageAlt: "Project T",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 21",
      namaProjek: "Project U",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/logo.png",
      imageAlt: "Project U",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 22",
      namaProjek: "Project V",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/logo.png",
      imageAlt: "Project V",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 23",
      namaProjek: "Project W",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/logo.png",
      imageAlt: "Project W",
      width: 1080,
      height: 1920,
    },
  ];
  return (
    <main className="px-8 sm:px-10 md:px-14 relative z-10 lg:px-20 xl:px-32 2xl:px-36 py-[50px] lg:py-[71px] bg-custom-blue min-h-screen overflow-hidden">
      <Image
        src="/Group 49.png"
        alt="3D Hexagon"
        width={264.87 * 1.3}
        height={226.24 * 1.3}
        className=" absolute w-[140px] z-[-2] sm:w-[180px] md:w-[220px] lg:w-[290px] xl:w-[400px] top-[90px] -left-[50px] lg:top-[210px] xl:top-[190px] xl:-left-[80px]"
      ></Image>

      <Image
        src="/Halograph.png"
        alt="3D Hexagon"
        width={264.87 * 1.3}
        height={226.24 * 1.3}
        className=" absolute w-[140px] z-[-2]  sm:w-[180px] md:w-[220px] lg:w-[290px] xl:w-[400px] top-[50px] -right-[30px] md:top-[50px] md:-right-[70px] lg:top-[120px] xl:top-[40px] xl:-right-[130px]"
      ></Image>

      <div className="flex flex-col mb-0 lg:mb-10 items-center">
        <h1 className="my-2 lg:my-8 z-20 text-[28px] lg:text-[54px] text-white font-bold scale-x-105">
          Exhi<span className="text-custom-yellow">(byte)</span>on
        </h1>
        <p className="mt-8 text-center text-white text-base  lg:text-xl px-10 sm:px-24 md:px-36 xl:px-72">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          aut corporis ad culpa at ea iure! Ratione ullam, dolorum alias quo
          dolor esse nam ipsum corporis, ipsam aut tenetur? Vel illo minima
          error illum natus. Esse reprehenderit hic ex qui rem voluptas.
          Expedita aliquid reiciendis magni, eos dolorum minima similique odit
        </p>
      </div>

      <ExhibitionClient data={dummyData} />
    </main>
  );
}

export const metadata = {
  title: "Byte | Exhi(byte)on",
  description: "Website aksi angkatan Byte",
};
