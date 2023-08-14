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
      namaProjek: "MaPed",
      description:
        '"MaPed" adalah website yang berisikan informasi seputar mata kuliah.',
      imageUrl: "/kelompok2.jpg",
      imageAlt: "MaPed",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 3",
      namaProjek: "Makan Yuk!",
      description:
        "Website Makan Yuk adalah website penyedia informasi mengenai makanan sehat dengan tujuan mempermudah mahasiswa untuk mendapatkan makanan sehat.",
      imageUrl: "/kelompok3.png",
      imageAlt: "Makan Yuk!",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 4",
      namaProjek: "TrashMap",
      description:
        "Website untuk mengatasi masalah pencemaran sampah, diperlukan upaya kolaboratif dari masyarakat, pemerintah, dan sektor swasta. Yakni, dengan cara mengelola sampah dengan baik dan tepat.",
      imageUrl: "/kelompok4.jpg",
      imageAlt: "TrashMap",
      width: 1080,
      height: 1920,
      linkUrl: "https://maull09.github.io/trashmap/",
    },
    {
      namaKelompok: "Kelompok 5",
      namaProjek: "ScholarSeek",
      description: "Website Portal Beasiswa.",
      imageUrl: "/kelompok5.png",
      imageAlt: "ScholarSeek",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 6",
      namaProjek: "Parkir Pintar",
      description: "Parkir Pintar Berbasis Kamera.",
      imageUrl: "/kelompok6.jpg",
      imageAlt: "Parkir Pintar",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 7",
      namaProjek: "iMap",
      description:
        "Website untuk memudahkan navigasi area kampus ITB yang dikhususkan kepada warga STEI ITB yang menyajikan lokasi dan informasi penting mengenai gedung Labtek V ITB Ganesha dan Gedung KOICA ITB.",
      imageUrl: "/kelompok7.png",
      imageAlt: "iMap",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 8",
      namaProjek: "TPBNeeds",
      description: "Website untuk sentralisasi penjualan kebutuhan TPB.",
      imageUrl: "/kelompok8.png",
      imageAlt: "TPBNeeds",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 9",
      namaProjek: "Ez Find",
      description: "Website publikasi barang hilang.",
      imageUrl: "/kelompok9.png",
      imageAlt: "Ez Find",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 10",
      namaProjek: "ITB Park",
      description: "Website Reservasi Parkir Online.",
      imageUrl: "/logo.png",
      imageAlt: "ITB Park",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 11",
      namaProjek: "Color Detector",
      description:
        "Aplikasi Color Detection untuk Asistensi Penderita Buta Warna.",
      imageUrl: "/kelompok11.png",
      imageAlt: "Color Detector",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 12",
      namaProjek: "Timefy",
      description: " Website Time Management untuk Mahasiswa.",
      imageUrl: "/kelompok12.png",
      imageAlt: "Timefy",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 13",
      namaProjek: "Medals and Trophies",
      description:
        "Website Penyedia Informasi Lomba. Platform terpusat untuk menjelajahi, mendaftar, dan mengunggah lomba-lomba.",
      imageUrl: "/kelompok13.png",
      imageAlt: "Medals and Trophies",
      width: 1080,
      height: 1920,
    },

    {
      namaKelompok: "Kelompok 14",
      namaProjek: "Portal",
      description:
        "Website Portal Mahasiswa untuk mencari informasi mengenai kantin di Kampus ITB Jatinangor.",
      imageUrl: "/kelompok14.jpg",
      imageAlt: "Portal",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 15",
      namaProjek: "Project O",
      description: "Website Kantin ITB.",
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
      namaProjek: "ProkerIn",
      description: "Review berkegiatan kemahasiswaan.",
      imageUrl: "/kelompok17.jpg",
      imageAlt: "ProkerIn",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 18",
      namaProjek: "POTTER",
      description: "Website Pollution Emission.",
      imageUrl: "/kelompok18.jpg",
      imageAlt: "POTTER",
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
      namaProjek: "sync.tr",
      description: "Website Information Tool.",
      imageUrl: "/logo.png",
      imageAlt: "sync.tr",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 21",
      namaProjek: "Project U",
      description: "Website Roadmap untuk Mahasiswa.",
      imageUrl: "/logo.png",
      imageAlt: "Project U",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 22",
      namaProjek: "Tempat Makan Yuk!",
      description: "Website rekomendasi makanan untuk mahasiswa.",
      imageUrl: "/kelompok22.png",
      imageAlt: "Tempat Makan Yuk!",
      width: 1080,
      height: 1920,
    },
    {
      namaKelompok: "Kelompok 23",
      namaProjek: "Kantin ITB",
      description: "Aplikasi request kantin ITB.",
      imageUrl: "/kelompok23.jpg",
      imageAlt: "Kantin ITB",
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
        <h1 className="my-2 font-montserrat lg:my-8 z-20 text-[28px] lg:text-[54px] text-white font-bold scale-x-105">
          Exhi<span className="text-custom-yellow">(byte)</span>on
        </h1>
        <p className="mt-8 text-center text-white text-base font-montserrat lg:text-xl px-6 sm:px-24 md:px-36 xl:px-72">
          &quot;Exhi(byte)on&quot; merupakan pameran hasil karya Byte berupa
          proyek perkelompok dengan tujuan menyelesaikan masalah dilingkungan
          sekitar dengan hasil produk yang memiliki basis keinformatikaan.
        </p>
      </div>

      <ExhibitionClient data={dummyData} />
    </main>
  );
}

export const metadata = {
  title: "Exhi(byte)on | Byte",
  description:
    "Exhi(byte)on adalah ajang pameran yang mempertunjukkan hasil karya-karya dari milestone yang sudah dibuat. Terdapat 23 kelompok yang akan mengikuti pameran ini. Pameran ini mempunyai tujuan untuk menunjukkan solusi solusi komputasi yang dapat digunakan untuk menyelesaikan masalah masalah di kehidupan sehari-hari.",
  generator: "Next.js",
  applicationName: "Byte",
  colorScheme: "dark",
  openGraph: {
    title: "Exhi(byte)on | Byte",
    description:
      "Exhi(byte)on adalah ajang pameran yang mempertunjukkan hasil karya-karya dari milestone yang sudah dibuat. Terdapat 23 kelompok yang akan mengikuti pameran ini. Pameran ini mempunyai tujuan untuk menunjukkan solusi solusi komputasi yang dapat digunakan untuk menyelesaikan masalah masalah di kehidupan sehari-hari.",
    url: "https://byte22.steikitb.site/",
    siteName: "Byte",
    images: [
      {
        url: "https://byte22.steikitb.site/logo.png",
        width: 1200,
        height: 630,
        alt: "Byte Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exhi(byte)on | Byte",
    description:
      "Exhi(byte)on adalah ajang pameran yang mempertunjukkan hasil karya-karya dari milestone yang sudah dibuat. Terdapat 23 kelompok yang akan mengikuti pameran ini. Pameran ini mempunyai tujuan untuk menunjukkan solusi solusi komputasi yang dapat digunakan untuk menyelesaikan masalah masalah di kehidupan sehari-hari.",
    images: [
      {
        url: "https://byte22.steikitb.site/logo.png",
        width: 1200,
        height: 630,
        alt: "Byte Logo",
      },
    ],
  },
};
