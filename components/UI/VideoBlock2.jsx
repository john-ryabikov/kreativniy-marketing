"use client"

import {useState, useEffect} from 'react'
import ReactPlayer from "react-player"
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    src: "/img/VideoBlock-2/video_2-2-3_prev.jpeg"
  },
  {
    id: 2,
    src: "/img/VideoBlock-2/video_2-2-4_prev.jpeg"
  }
]


export default function VideoBlock2({ videos, height, imgs }) {

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && 
        <motion.div 
          className={`relative w-screen xl:w-full h-[500px] ${height} flex flex-col items-start overflow-x-auto mb-12 xl:mb-[20px] scrollbar-hidden`}
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.85}}
        >
          <div className='absolute xl:w-[1200px] top-0 left-0 xl:left-1/2 xl:-translate-x-1/2 flex flex-row xl:flex-wrap items-center justify-start xl:justify-between px-6 sm:px-10'>
            {videos.map((video) => (
              <div key={video.id} className={`relative w-[200px] h-[432px] flex flex-col items-center justify-center overflow-hidden rounded-[30px] xl:rounded-[15px] ${video.prev} bg-cover group mr-8 last:mr-0 xl:mr-10 mt-10 xl:last:mr-10 xl:mt-0 xl:mb-10 border border-solid cursor-pointer`}>
                  <ReactPlayer
                    url={video.href}
                    width={"100%"}
                    height={"100%"}
                    playIcon={<img className='w-[70px] h-[70px] rounded-full shadow-[0_0_15px_4px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-125' src="/img/Icons/button_video_icon.svg"/>}
                    playing
                    light
                    controls
                  />
              </div>
            ))}
            {imgs && (
              <>
                {images.map((image) => (
                  <div key={image.id} className='relative w-[200px] h-[432px] flex flex-col items-center justify-center overflow-hidden rounded-[30px] xl:rounded-[15px] mr-8 last:mr-0 xl:mr-10 mt-10 xl:last:mr-10 xl:mt-0 xl:mb-10 border border-solid'>
                    <img className='w-full' src={image.src} alt=""/>
                  </div>
                ))}
              </>
            )}
          </div>
        </motion.div>  
      }
    </>
  )
}
