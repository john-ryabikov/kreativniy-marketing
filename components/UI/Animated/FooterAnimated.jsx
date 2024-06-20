"use client"

import { motion } from "framer-motion"

export default function FooterAnimated({ children }) {
  return (

        <motion.footer 
          className='section mt-[70px] xl:mt-[120px] pb-10'
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.5}}
        >
          {children}
        </motion.footer>
  )
}
