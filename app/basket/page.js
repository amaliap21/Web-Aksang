import IconCardAlt from '@/components/icon-card-alt'
import PersuasiveQr from '@/components/persuasive-qr'
import Image from 'next/image'
import React from 'react'

function basket() {

  const arrayKetentuan = [
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae.",
  ]

  return (
    <main className=' font-montserrat bg-[#092079] min-h-screen overflow-hidden'>

      
      <div className='px-8 lg:px-12'>
        <Image src="/piala.png" alt="Piala Background" width={286} height={414} className=' w-[130px] lg:w-[286px] absolute left-0 top-0 lg:top-0'/>

        <div className='relative'>
          <Image src="/garis_left.png" alt="Garis Background" width={591} height={565} className='absolute -right-40 -top-40 hidden lg:block'/>
          <Image src="/garis_up.png" alt="Garis Background" width={478} height={591} className='absolute left-0 top-[940px] hidden lg:block'/>
        </div>

        <h1 className='pt-[60px] lg:pt-[111px] mb-[60px] lg:mb-[100px] flex justify-center font-bold drop-shadow-md text-[28px] lg:text-[54px] [text-shadow:_0px_4px_4px_#6D459A] leading-[140%] tracking-[0.54px]'  >
          <span className="text-custom-yellow">Byte </span> &nbsp;Basketball
        </h1>

        <div className='flex mb-[120px] lg:mb-[200px] justify-center'>
          <div className='flex flex-col gap-[20px] lg:gap-[24px] lg:mr-[32px]' >
            <h2 className='text-custom-yellow text-[24px] lg:text-[36px] font-bold'>
              Ketentuan
            </h2>
            {arrayKetentuan.map((text) => (
            <p key="index" className="bg-white/30 justify-center align-middle px-6 py-4 min-h-[98px] max-w-[654px] rounded-2xl text-justify text-[12px] lg:text-base">
              {text}
            </p>
            ))}
          </div>

          <Image src="/bola_basket.png" alt="Bola Basket" width={500} height={500} className='self-center w-[150px] lg:w-[450px]'
          style={{
            background: "radial-gradient(circle, rgb(47, 67, 142) 55%, rgba(0,0,0,0) 71%"
            }
          }/>
        </div>

        <div className='flex flex-col lg:flex-row gap-14 lg:gap-[71px] justify-center items-center mb-[80px] lg:mb-[120px]'>
          <IconCardAlt title={"Waktu"} description={"waktu basket waktu basket waktu basket waktu basket"} imageUrl={"/waktu.png"} imageAlt={"Logo Jam"} width={170} height={152}/>
          <IconCardAlt title={"Tempat"} description={"tempat basket tempat basket tempat basket tempat basket "} imageUrl={"/tempat.png"} imageAlt={"LogoTempat"} width={112} height={170}/>
        </div>
 

      </div>

      <PersuasiveQr 
       iconLeftUrl="/bell.png" 
       yellowText="Tunggu Apalagi," 
       whiteText="Segera daftarkan tim kamu!!" 
       qrImageUrl="/qr_code.png" 
       buttonText="DAFTAR DISINI"/>

    </main>
    
  )
}

export default basket
export const metadata = {
  title: "Basket | Byte",
  description: "Website aksi angkatan Byte",
};
