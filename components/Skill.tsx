import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Skill({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img />
    </div>
  )
}