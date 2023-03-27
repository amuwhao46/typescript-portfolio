import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 items-start md:px-8 z-10'>
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1
      }}
      className='flex flex-row justify-center md:justify-start md:flex-grow items-center pt-4 mx-auto'>
        {/* Logo & Name */}
        <h1 className='text-gray-500 text-3xl font-bold'>Oke Amuwha</h1>
      </motion.div>
      <motion.hr 
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
      transition={{duration: 1.3}}
      />
    </header>
  )
}