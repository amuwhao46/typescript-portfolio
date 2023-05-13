import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
  
};

type Props = {}

export default function Contacts({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:amuwhao46@gmail.com?subject=${formData.subject}&body=${formData.message}`
  };

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

        <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register("name")}
            placeholder='Name'
            className='contactInput' type='text' />
            <input {...register("email")}
            placeholder='Email'
            className='contactInput' type='email' />
          </div>
          <input {...register("subject")}
          placeholder='Subject'
          className='contactInput' type='text' />
          <textarea {...register("message")}
          placeholder='Message'
          className='contactInput' />
          <button className='bg-green-300 py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-green-600 transition-colors'>Submit</button>
        </form>
      </div>
    </div>
  )
}