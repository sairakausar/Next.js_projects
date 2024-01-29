'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
const FramerMotion3 = () => {
    const [showCard, setShowCard] = useState(false)
  return (
      <div
          style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              background: 'gray'
      }}
      >
          <motion.div
              style={{
                  background: '#fff',
                  padding: '3rem 2rem',
                  borderRadius: '8px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.2)'
              }}
              whileHover={{
                  scale: 1.1
              }}
              transition={{
                  layout: {
                      duration: 1,
                      type: 'spring'
                  }
              }}
              layout
              onClick={() => setShowCard(!showCard)}
          >
              <motion.h3
              
              >
                  Hower on Click
              </motion.h3>   
          </motion.div>
          
    </div>
  )
}

export default FramerMotion3