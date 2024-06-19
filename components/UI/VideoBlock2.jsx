"use client"

import {useState, useEffect} from 'react'
import ReactPlayer from "react-player"

export default function VideoBlock2({ videos, height }) {

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && 
        <div className={`relative w-screen xl:w-full h-[500px] ${height} flex flex-col items-start overflow-x-auto mb-12 xl:mb-[20px] scrollbar-hidden`}>
          <div className='absolute xl:w-[1200px] top-0 left-0 xl:left-1/2 xl:-translate-x-1/2 flex flex-row xl:flex-wrap items-center justify-start xl:justify-between px-6 sm:px-10'>
            {videos.map((video) => (
              <div key={video.id} className={`relative w-[200px] h-[432px] flex flex-col items-center justify-center overflow-hidden rounded-[30px] ${video.prev} bg-cover group mr-8 last:mr-0 xl:mr-10 mt-10 xl:last:mr-10 xl:mt-0 xl:mb-10 border-2 border-solid cursor-pointer`}>
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
          </div>
        </div>  
      }
    </>
  )
}
