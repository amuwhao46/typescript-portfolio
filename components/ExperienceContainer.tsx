import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceContainer({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-900 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img 
      initial={{
        y:-100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ 
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src='https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg'
      alt='test'/>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Company Name</h4>
        <p className='font-bold text-2xl mt-1'>Position</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech Stack */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work/ ended work</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Technology</li>
          <li>Technology</li>
          <li>Technology</li>
          <li>Technology</li>
          <li>Technology</li>
        </ul>
      </div>
    </article>
  )
}