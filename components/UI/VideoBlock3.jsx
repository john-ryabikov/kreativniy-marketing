"use client"

import {useState, useEffect} from 'react'
import ReactPlayer from "react-player"

export default function VideoBlock3() {

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className='relative w-[296px] h-[640px] flex flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[url(/img/VideoBlock-3/video_3-1_prev.png)] bg-cover group mt-12 xl:mt-0 xl:mr-12 border-2 border-solid'>
      {hasWindow && 
        <ReactPlayer
          url={"/img/VideoBlock-3/video_3-1.MP4"}
          width={"296px"}
          height={"100%"}
          playIcon={<img className='w-[70px] h-[70px] rounded-full shadow-[0_0_15px_4px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-125' src="/img/Icons/button_video_icon.svg"/>}
          playing
          light
          controls
        />
      }
    </div>
  )
}
