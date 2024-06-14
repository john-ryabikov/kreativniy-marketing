"use client"

import {useState, useEffect} from 'react'
import ReactPlayer from "react-player"

export default function MainVideo() {

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className='relative w-full xl:w-[350px] h-[640px] flex flex-col items-center justify-center overflow-hidden rounded-[30px] my-[60px] xl:my-0 bg-[url(/img/Section-2/main_video_prev.png)] bg-cover group'>
      {hasWindow && 
        <ReactPlayer
          url={"/img/Section-2/main_video.mp4"}
          width={"100%"}
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
