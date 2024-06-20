import HeaderAnimated from "@components/UI/Animated/HeaderAnimated";
import Link from "next/link";

const links = [
  {
    id: 1,
    href: "https://www.youtube.com/@reklama.y.blogerov",
    icon: "/img/Icons/ytb_button_header.svg"
  },
  {
    id: 2,
    href: "https://t.me/Vyachtslavv",
    icon: "/img/Icons/tg_button_header.svg"
  },
]

export default function Header() {
  return (
    <HeaderAnimated> 
      <img className='relative w-[150px] xl:w-[220px]' src="/img/Header/logo.png" alt="kreativniy-marketing"/>
      <div className='relative w-[70px] xl:w-[96px] flex flex-row items-center justify-between'>
        {links.map((link) => (
            <Link key={link.id} className='relative hover:scale-105 transition-all' href={link.href} target="_blank">
              <img className='w-[28px] xl:w-[40px]' src={link.icon} alt="Logo"/>
            </Link>
        ))}
      </div>
    </HeaderAnimated>
  )
}
