export default function WrapperCard({children, flex}) {
  return (
    <div className={`relative w-full xl:w-[1200px] px-12 xl:px-16 py-12 xl:py-14 rounded-2xl flex ${flex} xl:flex-row items-center justify-start xl:justify-between backdrop-blur bg-main-gradient shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`}>
        {children}
    </div>
  )
}
