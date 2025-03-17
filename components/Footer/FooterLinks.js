import Link from "next/link"

const links = [
    {
        id: 1,
        href: "/",
        cont: "Политика в отношении обработки персональных данных"
    },
    {
        id: 2,
        href: "/",
        cont: "Договор оказания услуг по организации мероприятий"
    },
    {
        id: 3,
        href: "/",
        cont: "Согласие на обработку персональных данных"
    }
]

export default function FooterLinks() {
  return (
    <div className='relative w-full flex flex-col xl:flex-row items-center justify-start xl:justify-between'>
        <p className='relative text-center xl:text-left font-extralight text-[#848484] text-base mb-8 xl:mb-0'>ИНН 505306466592<br/>ОГРН 321508100079173<br/>ИП ВЯЧЕСЛАВ БЫЧКОВ ВАДИМОВИЧ</p>
        <p className='relative flex flex-col items-center xl:items-end font-extralight text-[#848484] text-xs'>
        {links.map((link, i) => (
            <Link key={i} className='relative inline-block mb-1 last:mb-0 xl:text-right hover:text-[#C0C0C0] transition-all' href={link.href} target="_blank">{link.cont}</Link>
        ))}
        </p>
    </div>
  )
}
