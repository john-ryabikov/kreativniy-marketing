import Link from "next/link";

const links = [
  {
    id: 1,
    href: "/",
    icon: "/img/Icons/ytb_button_header.svg"
  },
  {
    id: 2,
    href: "/",
    icon: "/img/Icons/tg_button_header.svg"
  },
]

export default function Header() {
  return (
    <header className='realtive w-full xl:w-[1200px] h-[80px] xl:h-[140px] xl:px-6 flex flex-row items-center justify-between'> 
      <p className='relative text-white font-light text-sm xl:text-2xl'>kreativniy-marketing.ru</p>
      <div className='relative w-[70px] xl:w-[96px] flex flex-row items-center justify-between'>
        {links.map((link) => (
            <Link key={link.id} className='relative hover:scale-105 transition-all' href={link.href}>
              <img className='w-[28px] xl:w-[40px]' src={link.icon} alt="Logo"/>
            </Link>
        ))}
      </div>
    </header>
  )
}
