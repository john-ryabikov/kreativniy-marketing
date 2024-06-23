"use client"

import { motion } from "framer-motion"

export default function PresAnimated({children, styled}) {
  return (
    <motion.div 
        className={styled}
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{ delay: 0.5 }}
    >
        {children}
    </motion.div>
  )
}
