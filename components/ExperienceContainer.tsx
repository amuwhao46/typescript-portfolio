import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceContainer({}: Props) {
  return (
    <article className=''>
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
      <div>
        <h4>Company Name</h4>
        <p>Position</p>
        <div>
          {/* Tech Stack */}
          <p>Started work/ ended work</p>
          <ul>
            <li>Technology</li>
            <li>Technology</li>
            <li>Technology</li>
            <li>Technology</li>
            <li>Technology</li>
          </ul>
        </div>
      </div>
    </article>
  )
}