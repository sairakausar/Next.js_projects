'use client'
import { motion } from "framer-motion"


export default function FramerMotion1() {
    return (
        <motion.h1
        
            initial={{ x: 0 }}
            animate={{ x: [ 0 , 900 , 0 ] }}
            transition={{
                duration: 3,
                delay: 0.3
                
            }}
            className="text-5xl text-lime-600"
            whileHover= {{scale: 0.9, opacity: 0.2}}
        >
            It is H1 for animation using Framer Motion 
        </motion.h1>
    )
}