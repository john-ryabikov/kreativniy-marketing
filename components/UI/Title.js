export default function Title({ title }) {
  return (
    <div className='relative w-full xl:w-[1200px] flex flex-col items-center justify-between mb-12 xl:mb-[100px]'>
        <div className='relative w-[70px] xl:w-[100px] h-[10px] rounded-full bg-[#FF0066] shadow-[0_0_35px_3px_rgba(255, 0, 102, 0.2)] mb-7 xl:mb-9'></div>
        <h2 className='relative w-[335px] xl:w-auto font-bold text-white text-[26px] xl:text-[64px] text-center leading-[120%]'>{title}</h2>
    </div>
  )
}
