import FooterRights from "./FooterRights"
import FooterLinks from "./FooterLinks"
import FooterSoc from "./FooterSoc"

const buttons = [
  {
    id: 1,
    title: "Связаться с директором:",
    href: "/",
    btn_text: "@Vyachtslavv",
    btn_icon: "/img/Icons/tg_icon.svg",
    color: "bg-[#0088CC]"
  },
  {
    id: 2,
    title: "Подписывайтесь на Yotube:",
    href: "/",
    btn_text: "Наш Yotube-канал",
    btn_icon: "/img/Icons/tg_icon.svg",
    color: "bg-[#FF0000]"
  }
]

export default function Footer() {
  return (
    <footer className='section mt-[70px] xl:mt-[120px] pb-10'>
      <div className='relative w-full flex flex-col items-center justify-start border-b-[1px] border-[#272727] pb-12 xl:pb-[60px]'>
        <h3 className='relative w-[335px] xl:w-[1200px] font-extralight text-white text-center text-3xl xl:text-[64px]'>Стоимость работы уточняйте</h3>
        <div className='relative w-[335px] xl:w-[800px] flex flex-col xl:flex-row justify-start xl:justify-between mt-10 xl:mt-[60px]'>
            {buttons.map((btn) => (
              <FooterSoc key={btn.id} title={btn.title} href={btn.href} btn_text={btn.btn_text} icon={btn.btn_icon} btn_color={btn.color}/>
            ))}
        </div>
      </div>
      <div className='relative w-[335px] xl:w-[1200px] flex flex-col items-center justify-start mt-8'>
        <FooterRights/>
        <FooterLinks/>
      </div>
    </footer>
  )
}
