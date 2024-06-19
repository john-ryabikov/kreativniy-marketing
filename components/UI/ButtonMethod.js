export default function ButtonMethod({ href, text, img, alt, color }) {
  return (
    <a className={`relative w-[270px] h-[60px] pl-8 pr-5 flex flex-row items-center justify-between ${color} rounded-full hover:scale-105 transition-all`} href={href}>
      <span className='absolute top-1/2 left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.5] block rounded-full'></span>
      <span className='inline-block text-sm font-bold'>{text}</span>
      <img className='inline-block' src={img} alt={alt}/>
    </a>
  )
}
