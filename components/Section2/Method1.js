export default function Method1({ title, subtitle}) {
  return (
    <div className={`relative w-[335px] xl:w-full flex flex-col items-start justify-start mb-4 xl:mb-[70px]`}>
        <p className='relative w-[335px] xl:w-full text-left text-white opacity-60 font-light text-xl xl:text-4xl'>{title}</p>
        {subtitle && <p className='relative w-full text-left text-white opacity-30 font-extralight text-sm xl:text-xl mt-7'>{subtitle}</p>}
    </div>
  )
}
