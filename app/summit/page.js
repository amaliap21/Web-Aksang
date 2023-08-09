import Image from 'next/image'
import Benefit from '@/components/summit_benefit'

const textBenefit = [{texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 1'}, {texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 2'}, {texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 3'}, {texts:'Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. 4'}]

export default function SummitPage() {
  return (
    <main className="bg-[#092079] min-h-screen">
      {/* TITLE */}
      <div className="mx-20 pt-20 ">
        <h1 className= "montserrat font-bold relative text-[54px] tracking-[0.54px] text-5xl text-center">ByteTech <span className="text-[#FADE7A]">Summit</span></h1>
        <h5 className= "montserrat text-[36px] font-[500] p-2 tracking-[0.72px] text-center">Empowering Society’s Future Through Informatics</h5>
        <p className= "p-10 font-[400] w-[1080px] tracking-[0.16px] text-[16px] text-center m-auto">Ultricies mi quis hendrerit dolor. A pellentesque sit amet porttitor eget dolor morbi. Nisl purus in mollis nunc sed id semper risus. Semper quis lectus nulla at. Lorem ipsum dolor sit amet consectetur adipiscing. Dui id ornare arcu odio ut. Fusce id velit ut tortor pretium viverra suspendisse.</p>
      </div>


      {/* ABOUT SPEAKER */}
      <div className="flex items-center justify-center border-radi rounded-[10px] h-[581px] w-[1241px] mx-auto" style={{"background": "linear-gradient(146deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.20) 100%)"
}}>
        <div className="relative left-15 bg-white w-[1137px] h-[515px] rounded-lg p-20 text-center">

          <h5 className= "text-[#092079] text-3xl montserrat font-[700] text-left text-[36px] pb-6">ABOUT SPEAKER,</h5>
          <p className= "text-[#092079] w-[599px] h-[296px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  </p>
        <div className=" absolute top-[30px] right-[60px] w-[350px] h-[450px] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"  style={{"background": "linear-gradient(317deg, #092079 0%, #4F9BFD 100%)"
  }}>
          <h5 className="text-[24px] pl-[85px] pb-[50px] absolute bottom-0 tracking-[-0.48px] font-[700] montserrat">SPEAKER NAME</h5>
        </div>
        </div>
      </div>


      {/* Mengapa Harus Join Summit? */}
      <div class="flex item-center justify-center my-[100px]">
        <div class= "w-fit flex justify-center flex-wrap">
          <div class="mx-auto self-center z-[999] ">
            <Image src={"/giftNc.png"} alt="Gift" width={620} height={630}></Image>
          </div>
          <div class="flex flex-col gap-[60px] mx-auto">
            <h1 class="w-4/6 break-words text-left font-montserrat font-bold text-[36px]">
              Mengapa <span class="text-custom-yellow">Harus Join Byte</span> Summit?
            </h1>
            <div class="box-border w-[675px] gap-[60px] flex flex-wrap justify-between">
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
