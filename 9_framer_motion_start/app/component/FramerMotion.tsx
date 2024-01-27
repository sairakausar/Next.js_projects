'use client'
import { motion } from "framer-motion"


export default function FramerMotion() {
    return (
        <motion.h1
        
            initial={{ x: -100 }}
        animate={{x: 0 }}>
            It is H1 for animation using Framer Motion 
        </motion.h1>
    )
}