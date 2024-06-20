"use client"

import { motion } from "framer-motion"

export default function SectionAnimated({ children, section }) {
  return (
    <>
      {section === "section-1" && (
        <motion.section 
          className="section"
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{ delay: 0.85 }}
        >
          {children}
        </motion.section>
      )}
      {section === "section-2" && (
        <motion.section
          id="methods"  
          className="section mt-[70px] xl:mt-[120px]"
          initial={{y: 50, opacity: 0}}
          transition={{ delay: 1 }}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
        >
          {children}
        </motion.section>
      )}
      {section === "section-3" && (
        <motion.section 
          className="section mt-10 xl:mt-[70px]"
          initial={{y: 50, opacity: 0}}
          transition={{ delay: 0.5 }}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
        >
          {children}
        </motion.section>
      )}
    </>
  )
}
