export default function FooterRights() {
  return (
    <div className='relative w-full flex flex-col xl:flex-row items-center justify-start xl:justify-between mb-10'>
        <div className='relative w-[130px] flex flex-row items-center justify-between mb-10 xl:mb-0'>
        <img className='relative w-[50px]' src="/img/Section-1/ozon_logo.svg" alt="Ozon"/>
        <img className='relative w-[60px]' src="/img/Section-1/wb_logo.png" alt="WB"/>
        </div>
        <p className='relative flex flex-col items-center xl:items-end justify-center text-xs text-end text-white font-extralight'>
        <span className='mb-2'>Разработка:<a className='text-[#4E618A] font-bold ml-1 transition-all hover:text-[#1F5FE9]' href="https://just-site.ru" target="_blank" rel="nofollow">Just-site.ru</a></span>
        <span>© 2022-2024 Все права защищены.</span>
        </p>
  </div>
  )
}
