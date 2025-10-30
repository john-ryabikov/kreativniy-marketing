import FooterRights from "./FooterRights"
import FooterLinks from "./FooterLinks"
import FooterSoc from "./FooterSoc"
import FooterAnimated from "@components/UI/Animated/FooterAnimated"

const buttons = [
  {
    id: 1,
    title: "Связаться с директором:",
    href: "https://t.me/Vyachtslavv",
    btn_text: "@Viachtslavv",
    btn_icon: "/img/Icons/tg_icon.svg",
    color: "bg-[#0088CC]"
  }
]

export default function Footer() {
  return (
    <FooterAnimated>
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
    </FooterAnimated>
  )
}
