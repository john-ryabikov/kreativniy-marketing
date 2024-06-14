import Header from "@components/Header/Header";
import ButtonMethod from "@components/UI/ButtonMethod";

export default function Section1() {
  return (
    <section className='relative w-full 2xl:w-[1430px] h-[690px] xl:h-[780px] mt-8 p-6 rounded-2xl bg-main-fon-mob xl:bg-main-fon bg-cover flex flex-col items-center justify-center'>
        <div className='relative w-full h-full xl:w-[1200px] flex flex-col items-center xl:items-start justify-end xl:justify-center'> 
          <Header/>
          <div className='relative w-full xl:w-[670px] h-auto px-3 xl:px-8 py-6 xl:py-12 rounded-2xl flex flex-col items-center xl:items-start justify-start xl:justify-center backdrop-blur bg-main-gradient shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'>
              <h1 className='w-full xl:p-22 text-center xl:text-left text-white text-2xl xl:text-[50px]'>Креативный маркетинг</h1>
              <p className='w-full mt-1 text-center xl:text-left text-[#4b4b4b] text-lg xl:text-[34px] tracking-[0.1em] font-light xl:mt-8'>от Вячеслава Бычкова</p>
              <p className='w-[228px] xl:w-[270px] text-center p-2 mx-auto xl:mx-0 mt-3 text-white font-bold text-[10px] xl:text-xs bg-[#4e618a] rounded-full xl:mt-8'>Эксперта по нестандартным продажам</p>
              <p className='w-full text-center xl:text-left mt-8 text-[#7c7c7c] font-regular text-sm xl:text-base leading-[160%]'>Программа для предпринимателей, которые не хотят тестировать новые каналы рекламы, а взять уже готовый рабочий вариант. Для тех, кто хочет роста в продажах, а также выделяться своим предложением от конкуретнов!</p>
              <ButtonMethod href="#price" text="Получить наш метод" img="/img/Icons/arrow_right_icon.svg" alt=">"/>
          </div>
        </div>
    </section>
  )
}
