import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Skill({ }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
      initial={{
        x: -200,
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ 
        x: 0, 
        opacity: 1 
      }}
      src='https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg'
      alt="test"
      className='rounded-full border-gray-500 object-cover h-24 w-24 xl:w-32 xl:h-32'
      />
    </div>
  )
}