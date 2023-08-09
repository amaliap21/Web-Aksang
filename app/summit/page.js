import Image from 'next/image'

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />

export default function SummitPage() {
  return (
    <main className="bg-[#092079] min-h-screen">
        <Image src="/summitbg.svg" alt="Background summit" width={572} height={572} className='w-[500px] aspect-square absolute z-10 top-0 left-[-80px]'></Image>
        <Image src="/summitbg.svg" alt="Background summit" width={572} height={572} className='w-[400px] aspect-square absolute z-100 bottom-[130px] right-[-20px] rotate-180 '></Image>
      {/* TITLE */}
      <div className="mx-20 pt-20 ">
        <h1 className= "montserrat font-bold relative text-[54px] tracking-[0.54px] text-5xl text-center">ByteTech <span className="text-[#FADE7A]">Summit</span></h1>
        <h5 className= "montserrat text-[36px] font-[500] p-2 tracking-[0.72px] text-center">Empowering Society’s Future Through Informatics</h5>
        <p className= "p-10 font-[400] w-[1080px] tracking-[0.16px] text-[16px] text-center m-auto">Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. Nisl purus in mollis nunc sed id semper risus. Semper quis lectus nulla at. Lorem ipsum dolor sit amet consectetur adipiscing. Dui id ornare arcu odio ut. Fusce id velit ut tortor pretium viverra suspendisse.</p>
      </div>


      {/* ABOUT SPEAKER */}
      <div className="flex items-center justify-center border-radi rounded-[10px] shadow xl: shadow-white/20 h-[581px] w-[1241px] mx-auto" style={{"background": "linear-gradient(146deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.20) 100%)"}}>
        <div className="relative left-15 bg-white w-[1137px] h-[515px] rounded-lg p-20 flex overflow-y-hidden text-center snap-x snap-mandatory">
            
            <div class="flex-shrink-0 snap-always snap-center">
                <h5 className= "text-[#092079] text-3xl montserrat font-[700] text-left text-[36px] pb-6">ABOUT SPEAKER,</h5>
                <div className=" absolute top-[30px] right-[30px] w-[350px] h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
                    <div className=" absolute bg-[#D9D9D9] top-0 right-0 w-[350px] h-[350px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"></div>
                    <h5 className="text-[24px] pl-[85px] pb-[50px] absolute bottom-0 tracking-[-0.48px] font-[700] montserrat">SPEAKER NAME</h5>
                </div>
                <p className= "text-[#092079] w-[599px] h-[296px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

            <div class="flex-shrink-0 snap-always snap-center">
                <h5 className= "text-[#092079] text-3xl montserrat font-[700] text-left text-[36px] pb-6">ABOUT SPEAKER,</h5>
                <div className=" absolute top-[30px] right-[60px] w-[350px] h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
                    <div className=" absolute bg-[#D9D9D9] top-0 right-0 w-[350px] h-[350px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"></div>
                    <h5 className="text-[24px] pl-[85px] pb-[50px] absolute bottom-0 tracking-[-0.48px] font-[700] montserrat">SPEAKER NAME</h5>
                </div>
                <p className= "text-[#092079] w-[599px] h-[296px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

            <div class="flex-shrink-0 snap-always snap-center">
                <h5 className= "text-[#092079] text-3xl montserrat font-[700] text-left text-[36px] pb-6">ABOUT SPEAKER,</h5>
                <div className=" absolute top-[30px] right-[30px] w-[350px] h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
                    <div className=" absolute bg-[#D9D9D9] top-0 right-0 w-[350px] h-[350px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"></div>
                    <h5 className="text-[24px] pl-[85px] pb-[50px] absolute bottom-0 tracking-[-0.48px] font-[700] montserrat">SPEAKER NAME</h5>
                </div>
                <p className= "text-[#092079] w-[599px] h-[296px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

            
        {/* <div className=" absolute top-[30px] right-[30px] w-[350px] h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
    <div className=" absolute bg-[#D9D9D9] top-0 right-0 w-[350px] h-[350px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"></div>
          <h5 className="text-[24px] pl-[85px] pb-[50px] absolute bottom-0 tracking-[-0.48px] font-[700] montserrat">SPEAKER NAME</h5>
        </div> */}
        </div>
    </div>

{/* 
    <div className=" absolute top-[30px] right-[30px] w-[350px] h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"}}>
        <div className=" absolute bg-[#D9D9D9] top-0 right-0 w-[350px] h-[350px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        </div>
        <h5 className="text-[24px] pl-[85px] pb-[50px] absolute bottom-0 tracking-[-0.48px] font-[700] montserrat">SPEAKER NAME</h5>
    </div> */}


      {/* Mengapa Harus Join Summit? */}
      <div className="mx-auto ">
        <h5 className="text-left text-[36px] font-[700] pt-20">Mengapa <span className="text-[#FADE7A]">Harus Join</span></h5>
        <h5 className="text-left text-[36px] font-[700]"><span className="text-[#FADE7A]">Byte </span>Summit ?</h5>
        <div className="flex border-radi rounded-[10px] h-[150px] w-[160px] mx-auto" style={{"background": "linear-gradient(154deg, rgba(153, 153, 255, 0.30) 0%, rgba(153, 153, 255, 0.19) 38.02%, rgba(153, 153, 255, 0.00) 100%)"
}}></div>
        <p className="montserrat text-[16px] w-[275px] h-[70px] font-[600] text-center">Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. </p>

      </div>
      
    </main>
  )
}
