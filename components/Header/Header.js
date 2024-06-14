import Link from "next/link";

export default function Header() {
  return (
    <header className='absolute xl:top-6 top-0 left-1/2 -translate-x-1/2 w-full h-[40px] xl:px-6 flex flex-row align-middle justify-between'> 
      <img className="w-[50px] xl:w-[70px] xl:h-[53px]" src="/img/Section-1/logo.png" alt="Logo"/>
      <Link className='relative w-[40px] xl:w-[200px] h-[40px] xl:h-[60px] flex flex-row items-center justify-center xl:justify-between xl:pl-8 xl:pr-5 bg-[#0088CC] rounded-full hover:scale-105 transition-all' href="/">
        <div className='hidden xl:block absolute top-[50%] left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.5] rounded-full'></div>
        <p className='hidden xl:block relative w-auto text-start font-bold text-[14px]'>@Vyachtslavv</p>
        <img className="w-[14px] xl:w-[22px]" src="/img/Icons/tg_icon.svg" alt="Logo"/>
      </Link>
    </header>
  )
}
