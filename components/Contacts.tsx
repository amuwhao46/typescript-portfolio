import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'


type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>Contact</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>Get in touch</h4>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='inline-block text-gray-600 w-7 h-7 mr-2 animate-pulse' />
          <p className='text-2xl'>+1 (248) 495-7743</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='inline-block text-gray-600 w-7 h-7 mr-2 animate-pulse' />
          <p className='text-2xl'>amuwhao46@gmail.com</p>
        </div>
      </div>
    </div>
  )
}