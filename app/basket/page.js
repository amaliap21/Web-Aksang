import PersuasiveQr from '@/components/persuasive-qr'
import Image from 'next/image'
import React from 'react'

function basket() {
  return (
    <main>
      <div className='bg-[#092079] min-h-screen font-montserrat'>
        <h1 className='pt-[111px] mb-[100px] flex items-center justify-center font-bold drop-shadow-md text-[54px] [text-shadow:_3px_3px_0_rgb(143_102_221/_50%)]'  >
        <span className="text-custom-yellow">Byte </span> &nbsp; Basketball
        </h1>

        <div className='flex mb-[200px]'>
          <div className='flex flex-col gap-[24px] ml-[195px] mr-[32px] '>
            <h2 className='text-custom-yellow text-[36px] font-bold'>
              Ketentuan
            </h2>
            <p className="bg-white/30 justify-center align-middle px-6 py-4 max-w-[654px] rounded-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="bg-white/30 justify-center align-middle px-6 py-4 max-w-[654px] rounded-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="bg-white/30 justify-center align-middle px-6 py-4 max-w-[654px] rounded-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="bg-white/30 justify-center align-middle px-6 py-4 max-w-[654px] rounded-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <Image src="/pemain_basket.png" alt="Pemain Basket" width={363} height={630}/>
          
        </div>

        <div className='flex gap-10 justify-center mb-[120px]'>
          <p className="bg-gradient-to-tl from-[#0f257f] to-[#3243a0] justify-center align-middle py-4 px-6 w-2/5 rounded-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="bg-gradient-to-tr from-[#0f257f] to-[#3243a0] justify-center align-middle px-6 py-4 w-2/5 rounded-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

       <PersuasiveQr iconLeftUrl="/bell.png" yellowText="Tunngu Apalagi," whiteText="Segera daftarkan tim kamu!!" qrImageUrl="/qr_code.png" buttonText="DAFTAR DISINI"/>

      </div>
    </main>
    
  )
}

export default basket