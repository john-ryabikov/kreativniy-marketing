"use client"

import { motion } from "framer-motion"

export default function MethodAnimated({ children, method }) {
  return (
    <>
      {method === "method-1" && (
        <motion.div 
          className='relative w-[335px] xl:w-full flex flex-col items-start justify-start mb-4 xl:mb-[70px]'
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{ delay: 0.5 }}
        >
          {children}
        </motion.div>
      )}
      {method === "method-2" && (
        <motion.div
          id="methods"  
          className='relative w-[335px] xl:w-[1200px] flex flex-col items-start justify-start mb-4 xl:mb-[100px]'
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{ delay: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}
