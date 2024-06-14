import Cert from "@components/UI/Cert";
import MainVideo from "@components/UI/MainVideo";
import { certs } from "@data/certificates";
import Title from "@components/UI/Title";
import WrapperCard from "@components/UI/WrapperCard";

export default function Section2() {
  return (
    <section className='relative w-full mt-[70px] flex flex-col items-center justify-start'>
        <Title title="В чем ценность нашего продукта?"/>
        <WrapperCard>
            <div className='relative w-full xl:w-[1200px] flex flex-col xl:flex-row items-center justify-start xl:justify-between'>
                <div className='relative w-full xl:w-[620px] flex flex-col items-center justify-start'>
                    <p className='relative text-center xl:text-left font-extralight text-[#7c7c7c] text-[16px] xl:text-2xl mb-[60px] xl:leading-[160%]'>
                        У нас есть доступ к разным приятным сертификатам. Каждый найдет для себя что ему нужнее и получит все бесплатно после покупки Вашего товара.
                    </p>
                    <div className='relative w-full xl:w-[620px] flex flex-wrap justify-center xl:justify-between'>
                        {certs.map((cert, i) => (
                            <Cert key={i}>
                                <div className='absolute top-[50%] left-[6px] -translate-y-2/4 w-[48px] h-[48px] bg-[#D9D9D9] opacity-[0.05] block rounded-full'></div>
                                <p className='relative w-[180px] text-start font-bold text-[14px]'>{cert.title}</p>
                                <img src="/img/Icons/cert_icon.svg" alt=">"/>
                            </Cert>
                        ))}
                    </div>
                </div>
                <MainVideo/>
            </div>
        </WrapperCard>
    </section>
  )
}
