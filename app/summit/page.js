import Image from "next/image";
import Benefit from "@/components/summit_benefit";
import IconCardAlt from "@/components/icon-card-alt";
import PersuasiveQr from "@/components/persuasive-qr";
import DocumentationClient from "@/components/documentation-client";

const textBenefit = [
  {
    texts: "Talkshow dengan pembicara yang berprestasi dan berpengalaman.",
    imageUrl: "/summit-1.png",
  },
  {
    texts: "Start-up (Korean series) inspired pitching.",
    imageUrl: "/summit-2.png",
  },
  {
    texts: "Performance by SteiWithUs.",
    imageUrl: "/summit-3.png",
  },
  {
    texts: "Doorprize menarik untuk peserta yang beruntung.",
    imageUrl: "/summit-4.png",
  },
];

export default function SummitPage() {
  // const documentationData = [
  //   {
  //     imageUrl: "/dummyfutsal.jpg",
  //     alt: "Documentation 1",
  //     eventName:
  //       "Nama Event/ Dokumentasi Kejuaraan Futsal yang pernah diraih 1",
  //   },
  //   {
  //     imageUrl: "/dummyfutsal.jpg",
  //     alt: "Documentation 2",
  //     eventName:
  //       "Nama Event/ Dokumentasi Kejuaraan Futsal yang pernah diraih 2",
  //   },
  //   {
  //     imageUrl: "/dummyfutsal.jpg",
  //     alt: "Documentation 2",
  //     eventName:
  //       "Nama Event/ Dokumentasi Kejuaraan Futsal yang pernah diraih 3",
  //   },
  //   {
  //     imageUrl: "/dummyfutsal.jpg",
  //     alt: "Documentation 2",
  //     eventName:
  //       "Nama Event/ Dokumentasi Kejuaraan Futsal yang pernah diraih 4",
  //   },
  //   {
  //     imageUrl: "/dummyfutsal.jpg",
  //     alt: "Documentation 2",
  //     eventName:
  //       "Nama Event/ Dokumentasi Kejuaraan Futsal yang pernah diraih 5",
  //   },
  //   {
  //     imageUrl: "/dummyfutsal.jpg",
  //     alt: "Documentation 2",
  //     eventName:
  //       "Nama Event/ Dokumentasi Kejuaraan Futsal yang pernah diraih 6",
  //   },
  //   // Add more objects as needed
  // ];
  return (
    <main className="bg-[#092079] min-h-screen w-full overflow-hidden relative flex flex-col -z-[999]">
      <div className="relative z-10 flex flex-col px-8 lg:px-12">
        {/* BG Image svg */}
        <Image
          src="/summitbg.svg"
          alt="Background summit"
          width={572}
          height={572}
          className="w-[500px] z-[-1] aspect-square absolute top-0 left-[-80px]"
        ></Image>
        <Image
          src="/summitbg.svg"
          alt="Background summit"
          width={572}
          height={572}
          className="w-[400px] aspect-square absolute z-[-3] top-[130px] right-[-20px] rotate-180 "
        ></Image>
        {/* TITLE */}
        <div className="px-3 lg:px-20 2xl:px-48 pt-[60px] lg:pt-[120px] ">
          <h1 className="font-montserrat font-bold relative text-[28px] lg:text-[54px] text-white tracking-[0.54px] text-5xl text-center">
            ByteTech <span className="text-[#FADE7A]">Summit</span>
          </h1>
          <h2 className="font-montserrat text-lg lg:text-4xl font-medium mt-3 lg:mt-4 text-white tracking-[0.72px] text-center">
            Empowering Society&apos;s Future Through Informatics
          </h2>
          <p className="font-montserrat mt-10 mb-8 lg:my-14 px-3 text-base lg:text-xl text-white font-regular text-center">
            Talkshow &quot;Empowering Society&apos;s Future through
            Informatics&quot; membahas penerapan teknologi informasi untuk
            memberdayakan masyarakat dan mencapai keseimbangan antara
            kepentingan individu dan masyarakat. Pembicara akan mengungkap
            inovasi dan strategi yang mendukung kesuksesan individu sambil
            berkontribusi pada kesejahteraan kolektif.
          </p>
        </div>

        {/* ABOUT SPEAKER MODIFIED */}
        <div
          style={{
            background:
              "linear-gradient(146deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.20) 100%)",
          }}
          className="flex w-full sm:w-[calc(100%-100px)] sm:mx-auto items-center border drop-shadow-[10px_20px_90px_#1c4a79] border-white p-4 lg:p-6 justify-center rounded-lg shadow xl:shadow-white/20 lg:max-w-[1100px] md:max-w-[750px]"
        >
          {/* CONTAINER PUTIH */}
          <div className="flex lg:flex-row font-montserrat py-10 px-5 md:p-10 lg:p-16 bg-white w-full md:max-w-[1050px] items-center justify-center rounded-lg overflow-hidden text-center">
            {/* CONTAINER TULISAN-KARTU */}

            <div className="flex flex-col-reverse gap-7 lg:gap-10 items-center justify-center lg:flex-row ">
              {/* TULISAN-KIRI */}
              <div className="flex flex-col md:flex-1 lg:max-w-[535px] md:max-w-[600px] px-1 sm:px-4 lg:px-0 w-full">
                <h2 className="text-[#092079] text-xl lg:text-3xl montserrat font-bold text-left pb-6">
                  ABOUT SPEAKER,
                </h2>
                <p className="text-[#092079] text-sm lg:text-base text-justify">
                  Azka Alya, mahasiswa Jurusan Sistem Teknologi Informasi (STI)
                  ITB 2019, adalah seorang pembicara inspiratif dengan prestasi
                  gemilang. Sebagai Project Officer Arkavidia 8.0, ia terbiasa
                  mengelola proyek skala besar. Dengan lebih dari 5 proyek
                  pengabdian masyarakat, 5 kali Career/Competition Mentoring &
                  Coaching, dan 5 kali magang sebagai Product Manager (PM).
                  <br />
                  <br />
                  Azka menunjukkan komitmen pada pengembangan komunitas dan
                  profesionalisme. Ia juga telah meraih kemenangan dalam lebih
                  dari 10 kompetisi bisnis dan UX, menggambarkan analisis tajam
                  dan inovasi bisnisnya. Sebagai pembicara, pengalaman serta
                  wawasannya dalam teknologi, manajemen, dan kompetisi akan
                  memberikan wawasan berharga bagi acara akademik Anda.
                </p>
              </div>
              {/* KARTU SPEAKER */}
              <div
                className="flex flex-col h-[270px] lg:w-[325px] lg:h-[440px] items-center rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                style={{
                  background:
                    "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)",
                }}
              >
                <Image
                  src="/speaker.jpg"
                  alt="Speaker"
                  width={500}
                  height={500}
                  className="lg:w-[350px] lg:h-[350px] object-cover object-center w-[205px] h-[205px]"
                />
                <h2 className="text-white text-base lg:text-2xl tracking-[0.48px] my-auto font-semibold font-montserrat items-center">
                  Azka Alya
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Mengapa Harus Join Summit? */}
        <Image
          src="/summitbgv2.svg"
          alt="Background summit2"
          width={572}
          height={572}
          className="w-[500px] aspect-square absolute z-[-4] bottom-[700px] left-[-80px]"
        ></Image>
        <div className="flex item-center justify-center my-[60px] lg:my-[80px] 2xl:my-[100px]">
          <div className="w-full lg:w-fit lg:gap-20 flex justify-center flex-wrap">
            <div className="mx-auto mb-[50px] lg:my-auto self-center z-0 flex justify-center align-center">
              <Image
                src={"/giftNc.png"}
                alt="Gift"
                width={620}
                height={630}
                className="w-[250px] md:w-[400px] 2xl:w-[550px]"
              ></Image>
            </div>
            <div className="flex flex-col gap-10 lg:gap-[60px] mx-auto">
              <h1 className=" md:w-4/6 break-words text-center lg:text-left font-montserrat text-white font-bold text-xl lg:text-4xl">
                Mengapa{" "}
                <span className="text-custom-yellow">Harus Join Byte</span>{" "}
                Summit?
              </h1>

              <div className="box-border md:w-[675px] gap-[20px] sm:gap-[30px] md:gap-[60px] text-white flex flex-wrap justify-center">
                {textBenefit.map((text, index) => (
                  <Benefit {...text} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Information Section */}
        <div className="flex flex-col lg:flex-row gap-14 mt-[40px] lg:mt-[50px] lg:gap-[71px] justify-center items-center mb-[80px] lg:mb-[120px]">
          {/* Icon Card for Waktu */}
          <IconCardAlt
            title={"Waktu"}
            description={"15 Agustus 2023 (13.30 - 16.30 WIB)"}
            imageUrl={"/waktu.png"}
            imageAlt={"Logo Jam"}
            width={170}
            height={152}
          />
          {/* Icon Card for Tempat */}
          <IconCardAlt
            title={"Tempat"}
            description={"Multipurpose Hall CRCS ITB Lt.3"}
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
        whiteText="Segera daftarkan dirimu di Summit!!"
        qrImageUrl="/qr-summit.png"
        buttonText="DAFTAR DISINI"
        linkUrl="https://forms.gle/4N3BgcMZdKLWAg1j8"
      />
      {/* {documentationData && (
        <DocumentationClient documentationData={documentationData} />
      )} */}
    </main>
  );
}

export const metadata = {
  title: "Summit | Byte",
  description:
    "Talkshow  'Empowering Society's Future through Informatics'  membahas penerapan teknologi informasi untuk memberdayakan masyarakat dan mencapai keseimbangan antara kepentingan individu dan masyarakat. Pembicara akan mengungkap inovasi dan strategi yang mendukung kesuksesan individu sambil berkontribusi pada kesejahteraan kolektif.",
  generator: "Next.js",
  applicationName: "Byte",
  colorScheme: "dark",
  openGraph: {
    title: "Summit | Byte",
    description:
      "Talkshow  'Empowering Society's Future through Informatics'  membahas penerapan teknologi informasi untuk memberdayakan masyarakat dan mencapai keseimbangan antara kepentingan individu dan masyarakat. Pembicara akan mengungkap inovasi dan strategi yang mendukung kesuksesan individu sambil berkontribusi pada kesejahteraan kolektif.",
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
    title: "Summit | Byte",
    description:
      "Selamat datang di situs resmi SPARTA 22, aksi unggulan dari Angkatan Byte! Kami dengan bangga mempersembahkan lomba Summit dan basket yang akan mengguncang panggung kompetisi. Bergabunglah dengan kami dalam perayaan semangat olahraga, persaingan yang sengit, dan pertemanan yang tak terlupakan.",
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
