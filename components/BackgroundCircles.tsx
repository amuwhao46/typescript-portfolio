import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1
    }}
    transition={{
      duration: 2
    }}
    className='relative flex justify-center items-center'>
      <div className='absolute border border-green-400 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='absolute border border-green-400 rounded-full h-[300px] w-[300px] mt-52'/>
      <div className='absolute border border-green-400 rounded-full h-[400px] w-[400px] mt-52'/>
      <div className='absolute border border-yellow-400 rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse'/>
      <div className='absolute border border-green-400 rounded-full h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles