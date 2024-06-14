export default function Title({ title }) {
  return (
    <div className='relative w-full h-[100px] flex flex-col items-center justify-between'>
        <div className='relative w-[50px] xl:w-[100px] h-[10px] rounded-full bg-[#FF0066] shadow-[0_0_35px_3px_rgba(255, 0, 102, 0.2)]'></div>
        <h2 className='relative w-[290px] xl:w-auto font-extrabold text-white text-2xl xl:text-[50px] text-center'>{title}</h2>
    </div>
  )
}
