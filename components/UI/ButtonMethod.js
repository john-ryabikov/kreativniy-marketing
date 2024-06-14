import Link from "next/link";

export default function ButtonMethod({ href, text, img, alt }) {
  return (
    <>
      {text === "Получить наш метод" ? (
        <a className='relative w-[270px] h-[60px] mt-10 pl-8 pr-5 flex flex-row items-center justify-between bg-[#FF0066] rounded-full hover:scale-105 transition-all' href={href}>
          <span className='absolute top-[50%] left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.5] block rounded-full'></span>
          <span className='inline-block'>{text}</span>
          <img className='inline-block' src={img} alt={alt}/>
        </a>
      ) : (
        <Link className='relative w-[270px] h-[60px] mt-10 pl-8 pr-5 flex flex-row items-center justify-between bg-[#FF0066] rounded-full hover:scale-105 transition-all' href={href}>
          <span className='absolute top-[50%] left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.5] block rounded-full'></span>
          <span className='inline-block'>{text}</span>
          <img className='inline-block' src={img} alt={alt}/>
        </Link>
      )}
    </>
  )
}
