import Cert from "@components/UI/Cert";
import VideoBlock3 from "@components/UI/VideoBlock3";
import Title from "@components/UI/Title";
import WrapperCard from "@components/UI/WrapperCard";
import ButtonMethod from "@components/UI/ButtonMethod";
import SectionAnimated from "@components/UI/Animated/SectionAnimated";

import { certs } from "@data/certificates";

export default function Section3() {
  return (
    <SectionAnimated section="section-3">
        <Title title="Как происходит процесс сотрудничества?"/>
        <WrapperCard flex="flex-col">
                <div className='relative w-full xl:w-[620px] flex flex-col items-center xl:items-start justify-start'>
                    <p className='relative w-full text-center xl:text-left font-extralight text-white opacity-30 text-base xl:text-2xl mb-12 xl:leading-[160%]'>
                        Индивидуально под каждый товар подбираем блогеров, всех отправляем на согласование со всеми показателями в таблице:
                    </p>
                    <div className='relative w-full flex flex-wrap justify-center xl:justify-between mb-12'>
                        {certs.map((cert, i) => (
                            <Cert key={i}>
                                <div className='absolute top-[50%] left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.05] block rounded-full'></div>
                                <p className='relative w-[200px] text-start font-bold text-[14px]'>{cert.title}</p>
                                <img src="/img/Icons/cert_icon.svg" alt=">"/>
                            </Cert>
                        ))}
                    </div>
                    <p className='relative w-full text-center xl:text-left font-extralight text-white opacity-30 text-base xl:text-2xl xl:leading-[160%]'>
                        Каждого блогера согласовываем с селером,подробный пример в работе с поставщиком на видео.
                    </p>
                </div>
                <VideoBlock3/>
        </WrapperCard>
        <h2 className='relative w-[335px] xl:w-[1200px] font-extralight text-white text-center text-3xl xl:text-[64px] my-12 xl:mb-[70px] xl:mt-[120px]'>Примеры продвижения отдельных артикулов</h2>
        <ButtonMethod href="https://saleanalytics.tilda.ws" text="Продвижение артикулов" img="/img/Icons/arrow_right_icon.svg" alt=">" color="bg-[#FF0066]"/>
    </SectionAnimated>
  )
}
