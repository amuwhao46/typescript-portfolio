import React from 'react'
import Image from 'next/image'
import Portrait from '../public/Portrait.jpg'
import { motion } from "framer-motion";


type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-widest text-gray-500'>About</h3>
      <motion.img
      src='../public/Portrait.jpg' />
    </div>
  )
}

export default About