import ButtonMethod from "@components/UI/ButtonMethod";
import WrapperCard from "@components/UI/WrapperCard";

export default function Section1() {
  return (
    <section className='section'>
      <WrapperCard flex="flex-col-reverse">
        <div className='realtive w-[335px] xl:w-[680px] flex flex-col items-center xl:items-start justify-center xl:justify-start'>
            <h1 className='relative w-full font-bold text-center xl:text-left text-white text-3xl xl:text-[64px] leading-[130%]'>
              Продвижение ваших товаров
              <p className='relative mt-6 xl:mt-0 xl:inline-block'>
                <img className='relative inline-block mx-4' src="/img/Section-1/ozon_logo.svg" alt="Ozon"/>
                <img className='relative inline-block' src="/img/Section-1/wb_logo.png" alt="WB"/>
              </p>
            </h1>
            <p className='relative w-full text-center xl:text-left mt-8 xl:mt-12 text-[#7c7c7c] font-regular text-sm xl:text-xl leading-[160%] mb-12'>Программа для предпринимателей, которые не хотят тестировать новые каналы рекламы, а взять уже готовый рабочий вариант. Для тех, кто хочет роста в продажах, а также выделяться своим предложением от конкуретнов!</p>
            <ButtonMethod href="#price" text="Подробнее о методе" img="/img/Icons/arrow_right_icon.svg" alt=">" color="bg-[#FF0066]"/>
        </div>
        <img className='relative w-[190px] xl:w-[360px] mb-10 xl:mb-0' src="/img/Section-1/logo_main.png"/>
      </WrapperCard>
    </section>
  )
}
