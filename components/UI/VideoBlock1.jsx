"use client"

import {useState, useEffect} from 'react'
import ReactPlayer from "react-player"
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    src: "/img/VideoBlock-1/video_1-4-3_prev.jpg"
  }
]


export default function VideoBlock1({ videos, imgs }) {

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
        className='relative w-screen xl:w-full h-[400px] xl:h-[530px] flex flex-col items-start overflow-x-auto mb-12 xl:mb-[100px] scrollbar-hidden'
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{delay: 0.85}}
      >
        <div className='absolute xl:w-[1180px] top-0 left-0 xl:left-1/2 xl:-translate-x-1/2 flex flex-row items-center justify-start xl:justify-between px-6 sm:px-10'>
          {videos.map((video) => (
            <div key={video.id} className='relative w-[200px] xl:w-[296px] h-[348px] xl:h-[518px] flex flex-col items-center justify-center overflow-hidden rounded-[15px] xl:rounded-[30px] group mr-8 last:mr-0 xl:mr-0 mt-10 xl:mt-0 border border-solid cursor-pointer'>
                <ReactPlayer
                  url={video.href}
                  width={"100%"}
                  height={"100%"}
                  playIcon={<img className='w-[70px] h-[70px] rounded-full shadow-[0_0_15px_4px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-125' src="/img/Icons/button_video_icon.svg"/>}
                  playing
                  light={video.prev}
                  controls
                />
            </div>
          ))}
          {imgs && (
              <>
                {images.map((image) => (
                  <div key={image.id} className='relative w-[200px] xl:w-[296px] h-[348px] xl:h-[518px] flex flex-col items-center justify-center overflow-hidden rounded-[15px] xl:rounded-[30px] group mr-8 last:mr-0 xl:mr-0 mt-10 xl:mt-0 border border-solid'>
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

