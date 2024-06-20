"use client"

import { motion } from "framer-motion"

export default function HeaderAnimated({ children }) {
  return (

        <motion.header 
          className='realtive w-full xl:w-[1200px] h-[80px] xl:h-[140px] flex flex-row items-center justify-between'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.1, delay: 0}}
        >
          {children}
        </motion.header>
  )
}
