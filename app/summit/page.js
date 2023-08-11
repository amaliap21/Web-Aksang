import Image from 'next/image'
import Benefit from '@/components/summit_benefit'

const textBenefit = [{texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 1'}, {texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 2'}, {texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 3'}, {texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 4'}]

export default function SummitPage() {
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css " />
  return (
    <main className="bg-[#092079] min-h-screen overflow-hidden overflow-x-hidden relative flex flex-col">
      {/* BG Image svg */}
        <Image src="/summitbg.svg" alt="Background summit" width={572} height={572} className='w-[500px] aspect-square absolute z-10 top-0 left-[-80px]'></Image>
        <Image src="/summitbg.svg" alt="Background summit" width={572} height={572} className='w-[400px] aspect-square absolute z-[3] top-[130px] right-[-20px] rotate-180 '></Image>
      {/* TITLE */}
      <div className="lg:mx-20 mx-10 pt-20 ">
        <h1 className= "montserrat font-bold relative text-[54px] text-white tracking-[0.54px] text-5xl text-center">ByteTech <span className="text-[#FADE7A]">Summit</span></h1>
        <h2 className= "montserrat text-[36px] font-[500] p-2 text-white tracking-[0.72px] text-center">Empowering Society’s Future Through Informatics</h2>
        <p className= "py-10 px-3 tracking-[0.16px] text-[16px] text-white font-[4vw] text-center">Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. Nisl purus in mollis nunc sed id semper risus. Semper quis lectus nulla at. Lorem ipsum dolor sit amet consectetur adipiscing. Dui id ornare arcu odio ut. Fusce id velit ut tortor pretium viverra suspendisse.</p>
      </div>

      {/* ABOUT SPEAKER MODIFIED */}
      <div className="flex items-center justify-center mx-5 rounded-[10px] shadow xl: shadow-white/20 lg:h-[681px] lg:w-[1241px] lg:mx-auto" style={{"background": "linear-gradient(146deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.20) 100%)"}}>
        {/* CONTAINER PUTIH */}
        <div className="flex lg:flex-row m-5 gap-20 py-20 px-7 lg:px-20 bg-white w-[1137px] overflow-x-visible snap-both sm:h-[1250px] md:h-[700px] lg:h-[615px] rounded-lg overflow-y-hidden text-center snap-mandatory">
            {/* CONTAINER TULISAN-KARTU */}
            <div className="flex flex-col-reverse items-center justify-center lg:flex-row flex-shrink-0 gap-10 snap-always snap-center">
                {/* TULISAN-KIRI */}
                <div className="flex flex-col lg:w-[599px] md:w-[800px] w-[250px] lg:h-[296px]">
                    <h2 className= "text-[#092079] text-3xl montserrat font-[700] text-left text-[36px] pb-6">ABOUT SPEAKER,</h2>
                    <p className= "text-[#092079] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                {/* KARTU SPEAKER */}
                <div className="flex flex-col lg:w-[350px] lg:h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
                    <Image src="/tes-thea.jpg" alt="Speaker" width={500} height={500} className="lg:w-[350px] lg:h-[350px] w-[225px] h-[225px]"/>
                    <h2 className="text-white lg:text-[24px] tracking-[-0.48px] font-[700] montserrat py-5 items-center" >SPEAKER NAME</h2>
                </div>
            </div>

            <div className="flex flex-col-reverse items-center justify-center lg:flex-row flex-shrink-0 gap-10 snap-always snap-center">
                {/* TULISAN-KIRI */}
                <div className="flex flex-col lg:w-[599px] md:w-[800px] w-[250px] lg:h-[296px]">
                    <h2 className= "text-[#092079] text-3xl montserrat font-[700] text-left text-[36px] pb-6">ABOUT SPEAKER,</h2>
                    <p className= "text-[#092079] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                {/* KARTU SPEAKER */}
                <div className="flex flex-col lg:w-[350px] lg:h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
                    <Image src="/tes-thea.jpg" alt="Speaker" width={500} height={500} className="lg:w-[350px] lg:h-[350px] w-[225px] h-[225px]"/>
                    <h2 className="text-white lg:text-[24px] tracking-[-0.48px] font-[700] montserrat py-5 items-center" >SPEAKER NAME</h2>
                </div>
            </div>

            <div className="flex flex-col-reverse items-center justify-center lg:flex-row flex-shrink-0 gap-10 snap-always snap-center">
                {/* TULISAN-KIRI */}
                <div className="flex flex-col lg:w-[599px] md:w-[800px] w-[250px] lg:h-[296px]">
                    <h2 className= "text-[#092079] text-3xl montserrat font-[700] text-left text-[36px] pb-6">ABOUT SPEAKER,</h2>
                    <p className= "text-[#092079] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                {/* KARTU SPEAKER */}
                <div className="flex flex-col lg:w-[350px] lg:h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
                    <Image src="/tes-thea.jpg" alt="Speaker" width={500} height={500} className="lg:w-[350px] lg:h-[350px] w-[225px] h-[225px]"/>
                    <h2 className="text-white lg:text-[24px] tracking-[-0.48px] font-[700] montserrat py-5 items-center" >SPEAKER NAME</h2>
                </div>
            </div>
        </div>
      </div>


      {/* Mengapa Harus Join Summit? */}
    <Image src="/summitbgv2.svg" alt="Background summit2" width={572} height={572} className='w-[500px] aspect-square absolute z-10 bottom-[700px] left-[-80px]'></Image>
      <div class="flex item-center justify-center my-[100px]">
        <div class= "w-fit max-w-[80%] flex justify-center flex-wrap">
          <div class="mx-auto my-[50px] self-center z-0 flex justify-center align-center">
            <Image src={"/giftNc.png"} alt="Gift" width={620} height={630} class="max-w-[80%]"></Image>
          </div>
          <div class="flex flex-col gap-[60px] mx-auto max-w-[100%]">
            <h1 class=" md:w-4/6 break-words text-left font-montserrat text-white font-bold text-[24px] md:text-[36px]">
              Mengapa <span class="text-custom-yellow">Harus Join Byte</span> Summit?
            </h1>

            <div class="box-border md:w-[675px] gap-[20px] md:gap-[60px] text-white flex flex-wrap justify-center">
              {
                  textBenefit.map((text,index) => (
                      <Benefit {... text} key={index}/>
                      ))
                    }
            </div>
          </div>
        </div>
      </div>
      

    </main>
  )
}