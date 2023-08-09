import Hero from "@/components/hero";
import About from "@/components/about";
import Event from "@/components/event";
import React from "react";
import IconCard from "@/components/icon-card";
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 p-10 lg:p-24 bg-custom-blue">
      <Hero />
      <About />{" "}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-[28px] lg:text-5xl text-white font-montserrat font-bold">
          <span className="text-custom-yellow">Our </span>Event
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full gap-x-60 2xl:gap-x-80 gap-y-20 lg:gap-y-16 mt-16 md:mt-20 lg:mt-32">
          <IconCard
            title="ByteTech Summit"
            description="Talkshow bersama alumni HMIF dengan tema “Nilai Etika dan Sikap sebagai Informatikawan”"
            buttonText="KUNJUNGI"
            buttonUrl="/"
            imageAlt="Cup"
            imageUrl="/mini-robot.png"
          />
          <IconCard
            title="Cup"
            description="Pertandingan basket dan futsal antar angkatan di HMIF"
            buttonText="KUNJUNGI"
            buttonUrl="/"
            imageAlt="Peluit"
            imageUrl={"/peluit.png"}
          />
          <IconCard
            title="ByteTech Summit"
            description="Talkshow bersama alumni HMIF dengan tema “Nilai Etika dan Sikap sebagai Informatikawan”"
            buttonText="KUNJUNGI"
            buttonUrl="/"
            imageAlt="zoom"
            width={150}
            height={150}
            imageUrl={"/zoom.png"}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
export const metadata = {
  title: "Byte",
  description: "Website aksi angkatan Byte",
};
