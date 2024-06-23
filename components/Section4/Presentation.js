import PresAnimated from "@components/UI/Animated/PresAnimated";

export default function Presentation({ presents, sm_height, height, sm_size }) {
  return (
    <PresAnimated styled={`relative w-screen xl:w-full ${sm_height} ${height} flex flex-col items-start justify-start overflow-x-auto mt-6 mb-10 scrollbar-hidden`}>
      <div className='absolute xl:w-[1200px] top-0 left-0 xl:left-1/2 xl:-translate-x-1/2 flex flex-row xl:flex-wrap items-center justify-start xl:justify-between px-6 sm:px-12 xl:px-0'>
        {presents.map((pres) => (
            <img key={pres.id} className={`relative ${sm_size} xl:w-[560px] xl:mb-[80px] mr-8 last:mr-0 xl:mr-0`} src={pres.href} alt=""/>
        ))}
      </div>
    </PresAnimated>
  )
}
