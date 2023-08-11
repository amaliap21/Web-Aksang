import Hero from "@/components/hero";
import About from "@/components/about";
import React from "react";
import IconCard from "@/components/icon-card";
import Image from "next/image";

const Home = () => {
  // Array of event details
  const events = [
    {
      title: "Exhi(Byte)On",
      description: "Pameran karya milestone angkatan BYTE dengan tema Sustainable Development Goals.",
      buttonText: "KUNJUNGI",
      buttonUrl: "/exhibyteon",
      imageAlt: "Exhi(Byte)On",
      imageUrl: "/mini-robot.png",
      width: 250,
      height: 250,
    },
    {
      title: "Cup",
      description: "Pertandingan basket dan futsal antar angkatan di HMIF",
      buttonText: "KUNJUNGI",
      buttonUrl: "/cup/futsal",
      imageAlt: "Cup",
      imageUrl: "/peluit.png",
      width: 200,
      height: 200,
    },
    {
      title: "ByteTech Summit",
      description: "Talkshow bersama alumni HMIF dengan tema “Nilai Etika dan Sikap sebagai Informatikawan”",
      buttonText: "KUNJUNGI",
      buttonUrl: "/summit",
      imageAlt: "ByteTech Summit",
      imageUrl: "/zoom.png",
      width: 200,
      height: 200,
    },
  ];

  // Return the JSX markup for the component
  return (
    <main className="flex relative min-h-screen flex-col overflow-hidden items-center justify-center gap-20 p-10 sm:px-20 md:px-24 lg:py-24 lg:px-20 2xl:px-32 bg-custom-blue ">
      {/* Background Image */}
      <Image
        src="/back-bawah.svg"
        alt="Background bawah"
        width={750}
        height={700}
        className="lg:w-[500px] lg:h-[500px] w-[300px] h-[500px] absolute -right-[270px] sm:-right-48 md:-right-52 2xl:right-0 -bottom-20 z-[1] overflow-hidden"
      />
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About /> {/* Event section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-[32px] lg:text-5xl text-white font-montserrat font-bold">
          <span className="text-custom-yellow">Our </span>Event
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full gap-x-60 2xl:gap-x-80 gap-y-20 lg:gap-y-16 mt-16 md:mt-20 lg:mt-24">
          {/* Mapping and rendering each event */}
          {events.map((event, index) => (
            <IconCard
              key={index} // Use index as the key
              title={event.title}
              description={event.description}
              buttonText={event.buttonText}
              buttonUrl={event.buttonUrl}
              imageAlt={event.imageAlt}
              imageUrl={event.imageUrl}
              width={event.width}
              height={event.height}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

// Export the Home component as the default export
export default Home;

export const metadata = {
  title: "Byte",
  description:
    "Selamat datang di situs resmi SPARTA 22, aksi unggulan dari Angkatan Byte! Kami dengan bangga mempersembahkan lomba futsal dan basket yang akan mengguncang panggung kompetisi. Bergabunglah dengan kami dalam perayaan semangat olahraga, persaingan yang sengit, dan pertemanan yang tak terlupakan.",
  generator: "Next.js",
  applicationName: "Byte",
  colorScheme: "dark",
  openGraph: {
    title: "Byte",
    description:
      "Selamat datang di situs resmi SPARTA 22, aksi unggulan dari Angkatan Byte! Kami dengan bangga mempersembahkan lomba futsal dan basket yang akan mengguncang panggung kompetisi. Bergabunglah dengan kami dalam perayaan semangat olahraga, persaingan yang sengit, dan pertemanan yang tak terlupakan.",
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
    title: "Byte",
    description:
      "Selamat datang di situs resmi SPARTA 22, aksi unggulan dari Angkatan Byte! Kami dengan bangga mempersembahkan lomba futsal dan basket yang akan mengguncang panggung kompetisi. Bergabunglah dengan kami dalam perayaan semangat olahraga, persaingan yang sengit, dan pertemanan yang tak terlupakan.",
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
