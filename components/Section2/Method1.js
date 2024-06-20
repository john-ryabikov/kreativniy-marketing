import MethodAnimated from "@components/UI/Animated/MethodAnimated";

export default function Method1({ title, subtitle}) {
  return (
    <MethodAnimated method="method-1">
        <p className='relative w-[335px] xl:w-full text-left text-white opacity-60 font-light text-xl xl:text-4xl'>{title}</p>
        {subtitle && <p className='relative w-full text-left text-white opacity-30 font-extralight text-sm xl:text-xl mt-7'>{subtitle}</p>}
    </MethodAnimated>
  )
}
