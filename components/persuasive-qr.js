export default function PersuasiveQr({yellowText, whiteText, iconLeftUrl, qrImageUrl, buttonText}){
  return (
    <div className=' flex mt-8 bg-[#9999FF]/50 rounded-tr-[120px] h-[400px] '>
    <div className='ml-[38px] my-auto'>
      <Image src={iconLeftUrl} alt="Bell" width={183} height={150}/>
    </div>
    <div className='ml-[30px] my-auto'>
      <h2 className=' text-[54px] font-bold '>
        <span className="text-custom-yellow">{yellowText} </span> <br />
      </h2>
      <h2 className='text-[54px] font-bold indent-12'>
        {whiteText}
      </h2>
    </div>
    <div className='flex flex-col justify-center mx-auto'>
      <div className='mx-auto'>
        <Image src={qrImageUrl} alt="QR Code" width={152} height={150} />
      </div>
      <button className='text-[16px] bg-[#C53998] border-[#9999FF] mt-[20px] font-semibold py-[20px] px-[50px] rounded-2xl border drop-shadow-xl'>
       {buttonText}
      </button>
    </div>
  </div>
  )
}