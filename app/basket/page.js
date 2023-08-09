import IconCardAlt from '@/components/icon-card-alt'
import PersuasiveQr from '@/components/persuasive-qr'
import Image from 'next/image'
import React from 'react'

function basket() {

  const arrayKetentuan = [
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae. Odio urna nunc orci mus feugiat convallis amet vitae.",
    "Lorem ipsum dolor sit amet consectetur. Odio urna nunc orci mus feugiat convallis amet vitae. Odio urna nunc orci mus feugiat convallis amet vitae.",
  ]

  return (
    <main className='font-montserrat tracking-[0.54px]'>

      <div className='bg-[#092079] min-h-screen overflow-hidden'>

        <div className='relative'>
          <Image src="/garis_left.png" alt="Garis Background" width={591} height={565} className='absolute -right-40 -top-40' />
          <Image src="/piala.png" alt="Piala Background" width={286} height={414} className='absolute left-0 -top-10'/>
          <Image src="/garis_up.png" alt="Garis Background" width={478} height={591} className='absolute left-0 top-[940px]'/>
        </div>

        <h1 className='pt-[111px] mb-[100px] flex items-center justify-center font-bold drop-shadow-md text-[54px] [text-shadow:_0px_4px_4px_#6D459A]  leading-[140%]'  >
        <span className="text-custom-yellow">Byte </span> &nbsp;Basketball
        </h1>

        <div className='flex mb-[200px] justify-center'>
          <div className='flex flex-col gap-[24px] mr-[32px]' >
            <h2 className='text-custom-yellow text-[36px] font-bold'>
              Ketentuan
            </h2>
            {arrayKetentuan.map((text) => (
            <p key="index" className="bg-white/30 justify-center align-middle px-6 py-4 max-h-[98px] max-w-[654px] rounded-2xl text-justify">
              {text}
            </p>
            ))}
          </div>
          <Image src="/bola_basket.png" alt="Bola Basket" width={500} height={500} className='self-center'
          style={{
            background: "radial-gradient(circle, rgb(47, 67, 142) 170px, rgba(0,0,0,0) 250px",
          }}/>
        </div>

        <div className='flex gap-[71px] justify-center mb-[120px]'>
          <IconCardAlt title={"Waktu"} description={"waktu basket waktu basket waktu basket waktu basket"} imageUrl={"/waktu.png"} imageAlt={"Logo Jam"} width={170} height={152}/>
          <IconCardAlt title={"Tempat"} description={"tempat basket tempat basket tempat basket tempat basket "} imageUrl={"/tempat.png"} imageAlt={"LogoTempat"} width={112} height={170}/>
        </div>
       <PersuasiveQr 
       iconLeftUrl="/bell.png" 
       yellowText="Tunggu Apalagi," 
       whiteText="Segera daftarkan tim kamu!!" 
       qrImageUrl="/qr_code.png" 
       buttonText="DAFTAR DISINI"/>
      </div>

    </main>
    
  )
}

export default basket