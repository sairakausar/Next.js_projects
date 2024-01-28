'use client'
import { motion } from "framer-motion"


export default function FramerMotion1() {
    return (
        <motion.h1
        
            initial={{ x: 0 }}
            // initial start from 0    in x-xix
            animate={{ x: [0, 900, 0] }}
            // it start from 0 and till 900 and also reach again in 0
            transition={{
                duration: 3,
                delay: 0.3
                
            }}
            className="text-5xl text-lime-600"
            whileHover={{ scale: 0.9, opacity: 0.2 }}
            //scale mean Size , Opacity mean Opacity when Hover
        >
            It is H1 for animation using Framer Motion 
        </motion.h1>
    )
}