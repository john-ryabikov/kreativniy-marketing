import ButtonMethod from "@components/UI/ButtonMethod";

export default function FooterSoc({title, href, btn_text, icon, btn_color}) {
  return (
    <p className='relative w-full flex flex-col items-center justify-start mb-10 xl:mb-0 last:mb-0'>
        <span className='relative font-extralight text-[#7C7C7C] text-lg mb-6'>{title}</span>
        <ButtonMethod href={href} text={btn_text} img={icon} color={btn_color}/>
    </p>
  )
}
