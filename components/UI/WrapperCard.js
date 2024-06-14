export default function WrapperCard({children}) {
  return (
    <div className='relative w-full 2xl:w-[1430px] flex flex-col items-center justify-start rounded-2xl bg-main-gradient backdrop-blur mt-[60px] px-4 pt-10 xl:py-16 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'>
        {children}
    </div>
  )
}
