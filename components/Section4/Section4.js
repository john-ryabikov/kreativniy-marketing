import Method1 from "@components/Section2/Method1";
import SectionAnimated from "@components/UI/Animated/SectionAnimated";
import Title from "@components/UI/Title";
import { presents_1, presents_2 } from "@data/presentations";
import Presentation from "./Presentation";

export default function Section4() {
  return (
    <SectionAnimated section="section-4">
        <Title title="Еще несколько примеров наших работ"/>
        <div className='relative w-screen xl:w-[1200px] flex flex-col items-center justify-start'>
            <Method1 
              title="1. Продвижение товаров" 
              subtitle="Пример кейса разбора продвижения товара, в конктретном случае для теромбелья."
            />
            <Presentation presents={presents_1} height="xl:h-[1660px]" sm_height="h-[400px]" size="xl:w-[560px]" sm_size="w-[320px]"/>
            <Method1 
              title="2. Бренд “Термо история”" 
              subtitle="Пример кейса с сводками, задачами, процессом и итоговыми результатами продвижения товара, сделанное всё за месяц."
            />
            <Presentation presents={presents_2} height="xl:h-[1920px]" sm_height="h-[200px]" size="xl:w-[360px]" sm_size="w-[280px]"/>
        </div>
    </SectionAnimated>
  )
}
