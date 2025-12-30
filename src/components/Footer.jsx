import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaRegCopyright, FaGithub, FaLinkedin } from 'react-icons/fa'
import {FaXTwitter, FaDiamond} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full mx-auto pt-16 pb-10 px-22 grid md:grid-cols-3 gap-8 text-gray-300 bg-gray-900'>
        <div className='md:col-span-2'>
            <h1 className='font-medieval w-full text-3xl font-bold text-amber-600'>Travelling Duende.</h1>
            {/* short description, maybe say follow us on social media */}
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <div className='flex justify-between md:w-[75%] w-[50%] my-6'>
                <FaFacebook size={20} />
                <FaInstagram size={20} />
                <FaXTwitter size={20} />
                <FaYoutube size={20} />
            </div>
            <p className='flex items-center gap-2 text-xs mt-10 text-gray-400'><FaRegCopyright size={10} /> 2026 Travelling Duende.
             All rights reserved.  <FaDiamond size={5} />  Website by R. Colón  
             <a href='https://www.linkedin.com/in/rubene-colon/' target='_blank' rel='noopener noreferrer'>
             <FaLinkedin size={13} /></a>
            </p>
        </div>
        <div className='col-span-1 flex flex-col justify-end'>
          <p className='flex items-center gap-2 text-xs'></p>
        </div>
        
    </div>
  )
}

export default Footer