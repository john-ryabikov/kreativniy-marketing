import MethodAnimated from "@components/UI/Animated/MethodAnimated";

export default function Method1({ title }) {
  return (
    <MethodAnimated method="method-2">
        <p className='relative w-[335px] xl:w-full text-left text-white opacity-60 font-light text-xl xl:text-4xl'>{title}</p>
    </MethodAnimated>
  )
}
