import { links } from "@data/links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='relative w-screen px-8 py-7 mt-10 flex flex-col items-center justify-start bg-[#000000]'>
      <div className='relative w-full xl:w-[1280px] flex flex-row items-center justify-between border-b-[1px] border-[#272727] pb-8'>
        <img className="w-[50px]" src="/img/Section-1/logo.png" alt="Logo"/>
        <p className='relative flex flex-col items-end justify-center text-xs text-end text-white font-extralight'>
          <span className='mb-2'>Разработка:<a className='text-[#4E618A] font-bold ml-1 transition-all hover:text-[#1F5FE9]' href="https://just-site.ru" target="_blank" rel="nofollow">Just-site.ru</a></span>
          <span>© 2024 Все права защищены.</span>
        </p>
      </div>
      <div className='relative w-full xl:w-[1280px] flex flex-col xl:flex-row items-center justify-start xl:justify-between mt-8'>
        <p className='relative text-center xl:text-left font-extralight text-[#848484] text-base mb-8'>ИНН 505306466592<br/>ОГРН 321508100079173<br/>ИП ВЯЧЕСЛАВ БЫЧКОВ ВАДИМОВИЧ</p>
        <p className='relative flex flex-col items-center xl:items-end font-extralight text-[#848484] text-xs'>
          {links.map((link, i) => (
            <Link key={i} className='relative inline-block mb-1 last:mb-0 xl:text-right hover:text-[#C0C0C0] transition-all' href={link.href} target="_blank">{link.cont}</Link>
          ))}
        </p>
      </div>
    </footer>
  )
}
