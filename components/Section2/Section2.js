import Title from "@components/UI/Title";
import Method1 from "./Method1";
import Method2 from "./Method2";
import VideoBlock1 from "@components/UI/VideoBlock1";
import VideoBlock2 from "@components/UI/VideoBlock2";
import { video_1, video_2, video_3, video_4, video_5 } from "@data/videos";
import SectionAnimated from "@components/UI/Animated/SectionAnimated";

export default function Section2() {
  return (
    <SectionAnimated section="section-2">
        <Title title="Как это все работает?"/>
        <div  className='relative w-screen xl:w-[1200px] flex flex-col items-center justify-start'>
          <Method1 
              title="1. Реклама от блогеров" 
              subtitle="Блогеры, которых мы подбираем не заезжаны рекламой и имеют свою аудиторию, которая им доверяет, а мы в свою очередь размещаем информацию о Вашем продукте с большей ценностью на новую аудиторию."
          />
          <VideoBlock1 videos={video_1}/>
          <Method2 title="2. Делаем брендам 1 000 000 просмотров"/>
          <VideoBlock2 videos={video_2} height="xl:h-[1000px]"/>
          <Method2 title="3. Примеры работ с поставщиками и отзывами от них"/>
          <VideoBlock2 videos={video_3} imgs={true}/>
          <Method1 title="4. Продвижение фулфилмента" mb="12" mb_xl="[100px]"/>
          <VideoBlock1 videos={video_4}/>
          <Method1 title="5. Примеры работ с таргетом"/>
          <VideoBlock1 videos={video_5}/>
        </div>
    </SectionAnimated>
  )
}
