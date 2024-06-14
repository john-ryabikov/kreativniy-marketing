import ButtonMethod from "@components/UI/ButtonMethod";
import Title from "@components/UI/Title";
import WrapperCard from "@components/UI/WrapperCard";

export default function SectionPrice() {
  return (
    <section className='relative w-full mt-[70px] flex flex-col items-center justify-start' id="price">
        <Title title="Сколько стоит моя программа?"/>
        <WrapperCard>
          <div className='relative w-full xl:w-[1200px] flex flex-col items-center justify-start'>
            <div className='relative w-full flex flex-col xl:flex-row items-center xl:items-start justify-start xl:justify-between border-b-[1px] border-[#737373] pb-10'>
              <div className='relative flex flex-col items-center xl:items-start justify-center'>
                <p className='relative w-full flex flex-row items-end justify-center xl:justify-start font-extralight text-[64px] xl:text-[96px]'>65 000<span className='relative -top-3 font-extralight text-[36px] xl:text-[64px] ml-3'>руб.</span></p>
                <p className='relative w-full text-center xl:text-left tracking-widest text-[#4B4B4B] font-light text-[18px] xl:text-[34px]'>Индивидуальная комплексная работа</p>
              </div>
              <div className='relative flex flex-col items-center xl:items-start justify-center'>
                <ButtonMethod href="/tinkoff-pay" text="Применить наш метод" img="/img/Icons/cash_icon.svg" alt="Tink"/>  
                <p className='relative w-[250px] font-extralight text-xs text-center text-[#848484] mt-5'>*Оплата предоставляется банком партнером <b className='font-bold text-white'>Тинькофф</b></p>
              </div>
            </div>
            <div className='relative w-full flex flex-col items-center justify-start pt-7'>
              <p className='relative w-full font-extralight text-[36px] xl:text-[50px] text-center xl:text-left xl:mb-4'>Пример договора работы с нами</p>
              <div className='relative w-full flex flex-col xl:flex-row items-center justify-start xl:justify-between'>
                <div className='relative w-[270px] xl:w-[800px] h-[60px] flex flex-row items-center justify-between pl-8 pr-5 rounded-full bg-[#343D4E] bg-opacity-[0.2] mt-10 mb-12 cursor-pointer hover:scale-105 transition-all'>
                  <div className='absolute top-[50%] left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.05] block rounded-full'></div>
                  <p className='relative w-[200px] xl:w-auto text-start font-bold text-[12px] xl:text-sm'>Договор оказания услуг по организации мероприятий</p>
                  <img src="/img/Icons/pdf_icon.svg" alt="PDF"/>
                </div>
                <p className='relative w-full flex flex-col xl:flex-row items-center justify-end'>
                  <span className='relative block h-[60px] text-center font-light text-[#4B4B4B] text-base xl:text-xl mb-6 xl:mb-0 xl:mr-6'>Связаться со мной:</span>
                  <a className='relative w-[270px] h-[60px] flex flex-row items-center justify-between pl-8 pr-5 rounded-full bg-[#0088CC] mb-10 hover:scale-105 transition-all' href="/">
                    <span className='absolute top-[50%] left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.5] block rounded-full'></span>
                    <span className='relative w-[200px] text-start font-bold text-[14px]'>@Vyachtslavv</span>
                    <img src="/img/Icons/tg_icon.svg" alt="TG"/>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </WrapperCard>
    </section>
  )
}
