import IconCard from "@/components/icon-card-alt";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 lg:p-24 bg-custom-blue">
      <h2 className="text-[28px] lg:text-5xl text-white font-montserrat font-bold">
        <span className="text-custom-yellow">Our </span>Event
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-x-60 2xl:gap-x-80 gap-y-20 lg:gap-y-16 mt-16 md:mt-20 lg:mt-32">
        <IconCard
          title="Exhi(Byte)On"
          description="Pameran teknologi yang mengangkat tema isu-isu global serta permasalahan di lingkungan kampus."
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
          description="Puncak acara yang mewadahi talkshow dengan topik seputar keprofesian di bidang informatika."
          buttonText="KUNJUNGI"
          buttonUrl="/"
          imageAlt="zoom"
          width={150}
          height={150}
          imageUrl={"/zoom.png"}
        />
      </div>
    </main>
  );
}

export const metadata = {
  title: "Byte",
  description: "Website aksi angkatan Byte",
};
