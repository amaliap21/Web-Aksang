import Image from 'next/image'
import React from 'react'

function basket() {
  return (
    <main>
      <div className='bg-[#092079] min-h-screen font-montserrat'>
        <h1 className='mt-[150px] mb-[100px] flex items-center justify-center font-bold drop-shadow-md text-[54px] [text-shadow:_3px_3px_0_rgb(143_102_221/_50%)]'  >
        <span className="text-custom-yellow">B</span>ASKET
        </h1>

        <div className='flex mb-16'>
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

        <div className='flex gap-10'>
          <p className="bg-gradient-to-tl from-[#0f257f] to-[#3243a0] justify-center align-middle py-4 px-6 w-2/5 rounded-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="bg-gradient-to-tr from-[#0f257f] to-[#3243a0] justify-center align-middle px-6 py-4 w-2/5 rounded-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className=' flex mt-8 bg-[#9999FF]/50 rounded-tr-[120px] py-12'>
          <div>
            <Image src="/bell.png" alt="Bell" width={183} height={150}/>
          </div>
          <div className='ml-[30px]'>
            <h2 className=' text-[54px] font-bold '>
              <span className="text-custom-yellow">Tunggu Apalagi, </span> <br />
            </h2>
            <h2 className='text-[54px] font-bold indent-12'>
              Segera daftarkan tim kamu!!
            </h2>
          </div>
          <div className='flex flex-col justify-center ml-[30px]'>
            <Image src="/qr_code.png" alt="QR Code" width={152} height={150}>

            </Image>
            <button className='bg-[#C53998] border-[#9999FF] mt-[20px] font-semibold py-[19px] px-[50px] rounded-2xl border drop-shadow-xl'>
              DAFTAR DISINI
            </button>
          </div>
        </div>

      </div>
    </main>
    
  )
}

export default basket