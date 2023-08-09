import IconCardAlt from "@/components/icon-card-alt";
import PersuasiveQr from "@/components/persuasive-qr";
import Image from "next/image";
import React from "react";

function Basket() {
  // Array of Ketentuan (Rules) for Basket
  const arrayKetentuan = [
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
  ];

  // Return the JSX markup for the component
  return (
    <main className=" font-montserrat bg-[#092079] min-h-screen overflow-hidden">
      <div className="px-8 lg:px-12">
        {/* Image of Piala (Trophy) Background */}
        <Image
          src="/piala.png"
          alt="Piala Background"
          width={286}
          height={414}
          className=" w-[130px] lg:w-[246px] absolute left-0 top-10 lg:top-5"
        />

        {/* Background Images using the Garis (Lines) */}
        <div className="relative">
          <Image
            src="/garis_left.png"
            alt="Garis Background"
            width={591}
            height={565}
            className="absolute right-40 -top-20 lg:-right-40 lg:-top-40"
          />
          <Image
            src="/garis_up.png"
            alt="Garis Background"
            width={478}
            height={591}
            className="absolute  max-lg:-right-60 top-[840px] lg:left-0 lg:top-[940px]"
          />
          <Image
            src="/garis_up.png"
            alt="Garis Background"
            width={478}
            height={591}
            className="absolute lg:hidden -right-60 top-[240px] "
          />
        </div>

        {/* Main Title */}
        <h1 className="pt-[60px] lg:pt-[111px] mb-[60px] lg:mb-[100px] flex justify-center font-bold drop-shadow-md text-[28px] lg:text-[54px] [text-shadow:_0px_4px_4px_#6D459A] leading-[140%] tracking-[0.54px]">
          <span className="text-custom-yellow">Byte </span> &nbsp;Basket
        </h1>

        {/* Ketentuan (Rules) Section */}
        <div className="flex mb-[120px] lg:mb-[200px] justify-center gap-3 lg:gap-20 2xl:gap-40">
          <div className="flex flex-col gap-[20px] lg:gap-[24px] lg:mr-[32px]">
            <h2 className="text-custom-yellow text-[24px] lg:text-[40px] font-bold">
              Ketentuan
            </h2>
            {/* Mapping and rendering each rule */}
            {arrayKetentuan.map((text, index) => (
              <p
                key={index} // Use index as the key
                className="bg-white/30 justify-center align-middle px-6 py-4 min-h-[98px] max-w-[654px] rounded-2xl text-justify text-[16px] lg:text-xl"
              >
                {text}
              </p>
            ))}
          </div>
          {/* Image of Bola Basket (Basketball) */}
          <Image
            src="/bola_basket.png"
            alt="Bola basket"
            width={500}
            height={500}
            className="self-center w-[130px] lg:w-[400px]"
            style={{
              background:
                "radial-gradient(circle, rgb(47, 67, 142) 55%, rgba(0,0,0,0) 71%",
            }}
          />
        </div>

        {/* Other Information Section */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-[71px] justify-center items-center mb-[80px] lg:mb-[120px]">
          {/* Icon Card for Waktu */}
          <IconCardAlt
            title={"Waktu"}
            description={"waktu basket waktu basket waktu basket waktu basket"}
            imageUrl={"/waktu.png"}
            imageAlt={"Logo Jam"}
            width={170}
            height={152}
          />
          {/* Icon Card for Tempat */}
          <IconCardAlt
            title={"Tempat"}
            description={
              "tempat basket tempat basket tempat basket tempat basket"
            }
            imageUrl={"/tempat.png"}
            imageAlt={"LogoTempat"}
            width={112}
            height={170}
          />
        </div>
      </div>

      {/* Persuasive QR Section */}
      <PersuasiveQr
        iconLeftUrl="/bell.png"
        yellowText="Tunggu Apalagi,"
        whiteText="Segera daftarkan tim kamu!!"
        qrImageUrl="/qr_code.png"
        buttonText="DAFTAR DISINI"
      />
    </main>
  );
}

// Export the Basket component as the default export
export default Basket;

export const metadata = {
  title: "Basket | Byte",
  description:
    "Selamat datang di situs resmi SPARTA 23, aksi unggulan dari Angkatan Byte! Kami dengan bangga mempersembahkan lomba futsal dan basket yang akan mengguncang panggung kompetisi. Bergabunglah dengan kami dalam perayaan semangat olahraga, persaingan yang sengit, dan pertemanan yang tak terlupakan.",
  generator: "Next.js",
  applicationName: "Byte",
  colorScheme: "dark",
  openGraph: {
    title: "Basket | Byte",
    description:
      "Selamat datang di situs resmi SPARTA 23, aksi unggulan dari Angkatan Byte! Kami dengan bangga mempersembahkan lomba futsal dan basket yang akan mengguncang panggung kompetisi. Bergabunglah dengan kami dalam perayaan semangat olahraga, persaingan yang sengit, dan pertemanan yang tak terlupakan.",
    url: "https://web-aksang.vercel.app/",
    siteName: "Byte",
    images: [
      {
        url: "https://web-aksang.vercel.app/logo.png",
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
    title: "Basket | Byte",
    description:
      "Selamat datang di situs resmi SPARTA 23, aksi unggulan dari Angkatan Byte! Kami dengan bangga mempersembahkan lomba futsal dan basket yang akan mengguncang panggung kompetisi. Bergabunglah dengan kami dalam perayaan semangat olahraga, persaingan yang sengit, dan pertemanan yang tak terlupakan.",
    images: [
      {
        url: "https://web-aksang.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Byte Logo",
      },
    ],
  },
};
