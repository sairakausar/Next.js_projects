'use client'
import { motion } from "framer-motion"


export default function FramerMotion() {
    return (
        <motion.h1
        
            initial={{ x: 0 }}
            animate={{ x: [200 ,56,56] }}
            transition={{
                duration: "3",
                delay: "0.3"
                
            }}
        className="text-5xl text-lime-600"
        >
            It is H1 for animation using Framer Motion 
        </motion.h1>
    )
}